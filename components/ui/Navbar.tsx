"use client"

import Image from "next/image"
import { Button } from './button'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    let isMounted = true

    supabase.auth.getUser().then(({ data }) => {
      if (isMounted) {
        setIsAuthenticated(Boolean(data.user))
      }
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(Boolean(session?.user))
    })

    return () => {
      isMounted = false
      authListener.subscription.unsubscribe()
    }
  }, [])

  const ctaLabel = isAuthenticated ? "Open App" : "Demo"
  const ctaHref = isAuthenticated ? "/dashboard" : "/login"

  return (
    <>
    {/* Desktop Navbar */}
    <div className='hidden w-full md:flex md:justify-center md:items-center navbar-shell mx-auto py-6'> {/* gap-70 */}

      <a href="/home">
      <Image src="/Images/Icons/Exports/logo-icon.svg" alt="ItriQ logo"
       width={121} height={55} className='main-logo'/>
      </a>

      <div className="navbar-links flex whitespace-nowrap"> {/* gap-30 */}
        <a href="#info">How it works</a>
        <a href="/pricing">Pricing</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQs</a>
      </div>

      {/* CTA Button */}
      <div className="flex">
        <Button asChild className='flex gap-0 h-auto rounded-full p-0'>
          <a href={ctaHref}>
            <div className='text-lg pl-3'>
              {ctaLabel}
            </div>
            <img
              src="/Images/Icons/Exports/CTA-arrow.svg"
              alt="arrow"
              className='h-12 w-12'
            />
          </a>
        </Button>
      </div>
    </div>

    {/* Mobile Navbar */}
    <div className='md:hidden flex-center w-full mt-6'>
      <a href="/home">
      <Image src="/Images/Icons/Exports/logo-icon.svg" alt="ItriQ logo"
         width={121} height={55} className='main-logo'/>
      </a>
    </div>
    </>
  )
}

export default Navbar
