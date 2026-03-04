import React from 'react'
import Image from "next/image"
import { Button } from './button'

const Navbar = () => {
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
        <Button className='flex gap-0 h-auto rounded-full p-0'>
          <div className='text-lg pl-3'>
            Demo
          </div>
          <img
            src="/Images/Icons/Exports/CTA-arrow.svg"
            alt="arrow"
            className='h-12 w-12'
          />
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