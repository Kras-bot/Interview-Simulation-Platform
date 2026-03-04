import { SignupForm } from '@/components/signup-form'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

const Register = () => {
  return (
    <div className='flex w-full min-h-screen px-80'>
      <div className='flex justify-center items-center w-full h-screen min-w-200 gap-10'>
        <SignupForm className='w-1/2 bg-background text-foreground' />
        <Card className='w-1/2 h-full' />
      </div>
    </div>
  )
}

export default Register