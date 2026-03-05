"use client"
import { Button } from '@/components/ui/button'
import Navbar from '@/components/ui/Navbar'
import SquiggleReveal from '@/components/ui/SquiggleReveal'
import Image from "next/image"
import React, { useRef } from 'react'
import { useCardAnimation } from '@/hooks/home/useCardAnimation'
import { useTitleAnimation } from '@/hooks/home/useTitleAnimation'

const Home = () => {
  const cardRef1 = useRef<HTMLImageElement>(null);
  const cardRef2 = useRef<HTMLImageElement>(null);
  const cardRef3 = useRef<HTMLImageElement>(null);
  const heroTextRef1 = useRef<HTMLSpanElement>(null);
  const heroTextRef2 = useRef<HTMLSpanElement>(null);
  const heroTextRef3 = useRef<HTMLSpanElement>(null);

  useCardAnimation(cardRef1, cardRef2, cardRef3);
  useTitleAnimation(heroTextRef1, heroTextRef2, heroTextRef3);

  return (
    <div className='main-desktop flex flex-col min-h-screen w-full gap-10 font-sans overflow-x-hidden'>
      <Navbar />
      
      {/* Main Content */}
      <div className='relative flex-1 flex-col flex-center gap-3'>

        {/* <SquiggleReveal /> */}

        {/* Hero Section*/}
        <div className='flex flex-col gap-10'>
          {/* Hero Title */}
          <div className='flex-center w-full'>
            <div className="font-akira text-7xl">
              <span ref={heroTextRef1} className="text-primary inline-block">ACE</span>{" "}
              <span ref={heroTextRef2} className="inline-block">YOUR</span>{" "}
              <span ref={heroTextRef3} className="inline-block">INTERVIEWS</span> 
            </div>
          </div>

          {/* Hero Text + CTA*/}
          <div className="flex">
            <div className="flex flex-col gap-5">
              <div className='w-100 font-light '>
                Practice live interviews with AI that adapts to your skill level.
                Get real-time feedback and analytics to track your growth
                and identify gaps.
              </div>
              <a href="/dashboard">
              <Button className='pl-10 w-80 gap-15 rounded-full py-8 cursor-pointer'>
                <div className='text-base font-bold'>Start Interview Practice</div>
                <img src="Images/Icons/Exports/CTA-arrow-plain.svg" alt="arrow" />
              </Button>
              </a>

            </div>
          </div> 
        </div>

        {/* Main Card */}
        <div className=''>
          <div className="relative flex bg-foreground w-400 h-120 rounded-3xl overflow-hidden">
            <Image src="/Images/Icons/Exports/grid.svg" alt="grid-background"
                    width={2000} height={480} className='absolute bottom-0 opacity-5'
                  />
            {/* Mini Card Container */}
            <div className="absolute inset-0 flex flex-row items-center justify-center gap-40">
              <Image ref={cardRef1} src="/Images/Icons/Exports/card1.svg" alt="card"
                      width={330} height={235.2}
                    />
              <Image ref={cardRef2} src="/Images/Icons/Exports/card2.svg" alt="card"
                      width={330} height={235.2}
                    />
              <Image ref={cardRef3} src="/Images/Icons/Exports/card3.svg" alt="card"
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