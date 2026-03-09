import { SignupForm } from '@/components/signup-form'
import Image from 'next/image'

const Register = () => {
  return (
    <main className='auth-page-shell'>
      <div className='auth-layout-shell'>
        <section className='auth-form-panel'>
          <SignupForm className='w-full max-w-lg' />
        </section>

        <section className='auth-visual-panel'>
          <Image
            src='/Images/Icons/rocket.svg'
            alt='Rocket illustration'
            width={320}
            height={460}
            priority
            className='auth-rocket'
          />
        </section>
      </div>
    </main>
  )
}

export default Register
