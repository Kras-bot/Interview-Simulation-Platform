"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useActionState } from "react"
import { signInWithEmailPassword } from "@/app/auth/actions"
import { Chrome, Facebook, Linkedin, Twitter } from "lucide-react"

type LoginFormState = {
  fieldErrors?: {
    email?: string
    password?: string
  }
  formError?: string
  values?: {
    email?: string
    password?: string
  }
}

const initialState: LoginFormState = {}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction, isPending] = useActionState(signInWithEmailPassword, initialState)

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="w-full border border-border/70 bg-white p-6 shadow-none md:p-10">
        <h1 className="text-center text-4xl font-black tracking-wide text-foreground">
          SIGN <span className="text-primary">IN</span>
        </h1>

        <form action={formAction} className="mt-8 space-y-5">
          <div className="space-y-1.5">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Username or Email"
              defaultValue={state.values?.email ?? ""}
              className="h-14 rounded-none border-border/80 bg-white px-4 text-base"
              required
            />
            {state.fieldErrors?.email ? (
              <p className="text-sm text-red-600">{state.fieldErrors.email}</p>
            ) : null}
          </div>

          <div className="space-y-1.5">
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              defaultValue={state.values?.password ?? ""}
              className="h-14 rounded-none border-border/80 bg-white px-4 text-base"
              required
            />
            {state.fieldErrors?.password ? (
              <p className="text-sm text-red-600">{state.fieldErrors.password}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-foreground/90">
              <input type="checkbox" className="h-4 w-4 border border-border/80" />
              Stay signed in
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          {state.formError ? (
            <p className="text-sm text-red-600">{state.formError}</p>
          ) : null}

            <Button
              type="submit"
              disabled={isPending}
              className="h-14 w-full rounded-none text-base font-semibold tracking-[0.18em]"
            >
            {isPending ? "SIGNING IN..." : "SIGN IN"}
          </Button>

          <div className="pt-4">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <span className="h-px bg-border/80" />
              <span className="text-sm text-muted-foreground">Or Sign In with</span>
              <span className="h-px bg-border/80" />
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Sign in with Google"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground/80"
              >
                <Chrome className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground/80"
              >
                <Facebook className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Sign in with Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground/80"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Sign in with LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground/80"
              >
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="bg-background px-4 py-3 text-center text-base">
            Not a member?{" "}
            <a href="/register" className="font-semibold text-primary hover:underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
