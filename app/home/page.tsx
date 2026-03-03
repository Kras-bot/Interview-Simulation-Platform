import { Button } from '@/components/ui/button'
import Navbar from '@/components/ui/Navbar'
import Image from "next/image"
import React from 'react'

const Home = () => {
  return (
    <div className='main-desktop flex flex-col min-h-screen w-full gap-10 font-sans'>
      <Navbar />
      
      {/* Main Content */}
      <div className='flex-1 flex-col flex-center gap-3'>

        {/* Hero Section*/}
        <div className='flex flex-col gap-10'>
          {/* Hero Title */}
          <div className='flex-center w-full'>
            <div className="font-akira text-7xl">
              <span className="text-primary">ACE</span> YOUR INTERVIEWS
            </div>
          </div>

          {/* Hero Text + CTA*/}
          <div className="flex">
            <div className="flex flex-col gap-5">
              <div className='w-100'>
                Practice live interviews with AI that adapts to your skill level.
                Get real-time feedback and analytics to track your growth
                and identify gaps.
              </div>
              <Button className='pl-10 w-80 gap-15 rounded-full py-8'>
                <div className='text-base font-bold'>Start Interview Practice</div>
                <img src="Images/Icons/Exports/CTA-arrow-plain.svg" alt="arrow" />
              </Button>
            </div>
          </div> 
        </div>

        {/* Main Card */}
        <div className=''>
          <div className="relative flex bg-foreground w-350 h-120 rounded-3xl overflow-hidden">
            <Image src="/Images/Icons/Exports/grid.svg" alt="grid-background"
                    width={1400} height={480} className='absolute bottom-0 opacity-5'
                  />
            {/* Mini Card Container */}
            <div className="absolute inset-0 flex flex-row items-center justify-center gap-20 ">
              <Image src="/Images/Icons/Exports/card1.svg" alt="card"
                      width={330} height={235.2}
                    />
              <Image src="/Images/Icons/Exports/card2.svg" alt="card"
                      width={330} height={235.2}
                    />
              <Image src="/Images/Icons/Exports/card3.svg" alt="card"
                      width={330} height={235.2}
                    />
            </div>

          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Home