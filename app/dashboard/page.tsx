import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import Image from "next/image"
import { EllipsisVertical, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

import { Button } from '@/components/ui/button'

const Dashboard = () => {
  return (
    <div className='flex h-screen w-full bg-[#FFFFFF]'>
      <div className="sidebar-section w-24">
        <Sidebar />
      </div>

      <div className="flex flex-1 min-h-0 flex-col w-full right-section">

        <div className="header flex items-center justify-between py-5 pl-20 border-b">
          <div className='text-4xl font-medium font-sans text-nowrap'>Mock Interview Sessions</div>
          <div className='profile-section flex flex-row items-center gap-3 mr-3'>
            <Avatar className='h-12 w-12'>
              <AvatarImage src="/Images/avatar-placeholder.jpg" className="object-cover" alt="user" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className='flex flex-col text-center'> 
              <div className='text-xl font-semibold'>John Doe</div>
              <div className='text-sm'>John.D@gmail.com</div>
            </div>
            <ChevronDown/>
          </div>
        </div>

        <div className="flex flex-1 min-h-0 flex-row main-content my-5">

          <div className="flex-3 flex min-h-0 flex-col video-section mx-20">

            <div className='flex justify-between items-center'>
              <div className='flex shrink-0 gap-4 option-section my-5'>
                <div className="option-card">
                  <div>🌍</div>
                  <div>English</div>
                </div>
                <div className="option-card">
                  <div>☺️</div>
                  <div>Friendly</div>
                </div>
                <div className="option-card">
                  <div>🎨</div>
                  <div>Design</div>
                </div>
              </div>
              <div className='flex'>
                <div className="option-card flex justify-center items-center gap-3 p-3">
                  <Clock />
                  <div>00.02.24</div>
                </div>
              </div>
            </div>

            <div className='video-feed-section flex flex-1 min-h-0 flex-col gap-5'>
              <div className="ai-camera-feed flex-1 min-h-0">
                <div className='ai-feed w-full h-full bg-background border rounded-2xl overflow-hidden'>
                  {/* Video Feed */}
                </div>
              </div>
              <div className="user-camera-feed flex-1 min-h-0">
                <div className='user-feed w-full h-full bg-background border rounded-2xl overflow-hidden'>
                  {/* Video Feed */}
                </div>
              </div>
            </div>
            
          </div>

          <div className="chat-section flex-2 flex flex-col border rounded-3xl mt-10 mr-20">

              <div className="flex flex-row justify-between items-center chat-header border-b p-5">
                <div className='w-16 h-16 bg-background border rounded-full'></div>
                <div className='font-bold text-xl'>AI Agent Interview</div>
                <EllipsisVertical />
              </div>

              <div className="chat-chatting-section pt-10 px-10 h-full">
                <div className='border rounded-3xl h-full'>
                  
                </div>
              </div>

              <div className='p-5 flex justify-center'>
                <Button className='rounded-full w-[60%] py-10 text-lg border-2 bg-background text-foreground hover:bg-background/20'> Get Insights </Button>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
