"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

type AuthFormState = {
  fieldErrors?: {
    username?: string
    email?: string
    password?: string
    confirmPassword?: string
  }
  formError?: string
  values?: {
    username?: string
    email?: string
    password?: string
    confirmPassword?: string
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function getSignInErrorMessage(rawMessage: string) {
  const message = rawMessage.toLowerCase()

  if (message.includes("email not confirmed")) {
    return "Please verify your email before logging in."
  }

  if (message.includes("invalid login credentials")) {
    return "Email or password is incorrect."
  }

  return rawMessage
}

function getSignUpErrorMessage(rawMessage: string) {
  const message = rawMessage.toLowerCase()

  if (message.includes("already registered") || message.includes("already exists")) {
    return "An account with this email already exists."
  }

  if (message.includes("signup is disabled")) {
    return "Sign up is disabled in Supabase Auth settings."
  }

  if (message.includes("database error saving new user")) {
    return "Supabase could not save the new user. Check your Supabase Auth/database setup."
  }

  if (message.includes("password should be at least")) {
    return "Password does not meet Supabase requirements."
  }

  if (message.includes("rate limit")) {
    return "Too many attempts. Please wait and try again."
  }

  return rawMessage
}

export async function signInWithEmailPassword(
  _previousState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const emailValue = formData.get("email")
  const passwordValue = formData.get("password")

  const email = typeof emailValue === "string" ? emailValue.trim() : ""
  const password = typeof passwordValue === "string" ? passwordValue : ""
  const fieldErrors: NonNullable<AuthFormState["fieldErrors"]> = {}
  const values: NonNullable<AuthFormState["values"]> = { email, password }

  if (!email) {
    fieldErrors.email = "Email is required."
  } else if (!isValidEmail(email)) {
    fieldErrors.email = "Enter a valid email address."
  }

  if (!password) {
    fieldErrors.password = "Password is required."
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors, values }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { formError: getSignInErrorMessage(error.message), values }
  }

  redirect("/dashboard")
}

export async function signUpWithEmailPassword(
  _previousState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const usernameValue = formData.get("username")
  const emailValue = formData.get("email")
  const passwordValue = formData.get("password")
  const confirmPasswordValue = formData.get("confirmPassword")

  const username = typeof usernameValue === "string" ? usernameValue.trim() : ""
  const email = typeof emailValue === "string" ? emailValue.trim() : ""
  const password = typeof passwordValue === "string" ? passwordValue : ""
  const confirmPassword = typeof confirmPasswordValue === "string" ? confirmPasswordValue : ""
  const fieldErrors: NonNullable<AuthFormState["fieldErrors"]> = {}
  const values: NonNullable<AuthFormState["values"]> = {
    username,
    email,
    password,
    confirmPassword,
  }

  if (!username) {
    fieldErrors.username = "Username is required."
  }

  if (!email) {
    fieldErrors.email = "Email is required."
  } else if (!isValidEmail(email)) {
    fieldErrors.email = "Enter a valid email address."
  }

  if (!password) {
    fieldErrors.password = "Password is required."
  } else if (password.length < 8) {
    fieldErrors.password = "Password must be at least 8 characters."
  }

  if (!confirmPassword) {
    fieldErrors.confirmPassword = "Please confirm your password."
  } else if (password !== confirmPassword) {
    fieldErrors.confirmPassword = "Passwords do not match."
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors, values }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  })

  if (error) {
    return { formError: getSignUpErrorMessage(error.message), values }
  }

  redirect("/login")
}

export async function signOutUser() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/login")
}
