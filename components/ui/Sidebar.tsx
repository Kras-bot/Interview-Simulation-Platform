import React from 'react'
import { 
  Home,
  Settings,
  MessageCircle,
  ClockFading,
  Archive,
  GraduationCap,
  BadgeInfo,
 } from "lucide-react";
 import Image from "next/image"

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full justify-between items-center py-10 border-foreground/20 border-r bg-background'>
      <div className='flex flex-col gap-15 main-section items-center'>

        <a href="/home">
          <Image src="/Images/Icons/Exports/logo-icon.svg" alt="ItriQ logo"
            width={121} height={55} className='main-logo w-16'/>
        </a>

        <div className='flex flex-col items-center'>
          <Home />
          <div>Home</div>
        </div>

        <div className='flex flex-col items-center'>
          <MessageCircle />
          <div className='text-center'>Mock Interview</div>
        </div>

        <div className='flex flex-col items-center'>
          <ClockFading />
          <div className='text-center'>Sessions</div>
        </div>

        <div className='flex flex-col items-center'>
          <Archive />
          <div className='text-center'>Archive</div>
        </div>

        <div className='flex flex-col items-center'>
          <GraduationCap />
          <div className='text-center'>Lessons</div>
        </div>

      </div>
      <div className='flex flex-col gap-3 footer-section'>
        <Settings />
        <BadgeInfo />
      </div>

    </div>
  )
}

export default Sidebar