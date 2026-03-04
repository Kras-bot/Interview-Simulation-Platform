import { FeatureRow } from '@/components/FeatureRow'
import Navbar from '@/components/ui/Navbar'
import PricingCard from '@/components/ui/PricingCard'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col min-h-screen w-full font-sans gap-20'>
      <Navbar />
      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full h-full px-60">

        <div className='flex justify-between gap-30'>
          {/* Header */}
          <div className="flex flex-col font-akira text-4xl">
            <div>Complete Tools </div>
            <div>For Career </div>
            <div className='text-primary'>Success.</div>
          </div>
          {/* Pricing Cards */}
          <div className='flex gap-10'>
            <PricingCard className='bg-[#FFFFFF]' title="Free" description="Basic mock interviews with AI feedback" price="$0.00" />
            <PricingCard className='bg-foreground text-[#FFFFFF]' title="Essentials" description="Full question library and detailed AI analysis" price="$19.99" />
            <PricingCard 
            classNameButton='bg-foreground hover:bg-foreground/80'
            className='bg-primary text-[#FFFFFF]'
            title="Elevate" description="Unlock mastery with full AI feedback" price="$29.99"
            backgroundImage='/Images/Icons/Exports/grid-pricing-card.svg'
            
            />
          </div>
        </div>

        {/* Header 2 */}
        <div className='flex text-4xl font-black'>
          Key Features
        </div>

        {/* Feature Table */}
        <div className="flex-1 mt-10 font-condensed">
          <div className='flex flex-col text-xl gap-5'>
            <FeatureRow isFirst={true} label="Limited behavioral question set" contains={[true, true, true]}/>
            <FeatureRow label="Timed mock interviews" contains={[true, true, true]}/>
            <FeatureRow label="Record and replay answers" contains={[false, true, true]}/>
            <FeatureRow label="Basic AI feedback" contains={[false, true, true]}/>
            <FeatureRow label="Summary progress stats" contains={[false, false, true]}/>
            <FeatureRow label="Full question library + multiple practice modes" contains={[false, false, true]}/>

          </div>
        </div>

      </div>
    </div>
  )
}

export default page