import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from './button';

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  className?: string;
  classNameButton?: string;
  backgroundImage?: string;
};

const PricingCard = ({ title, price, description, className, classNameButton, backgroundImage } : PricingCardProps) => {
  return (
    <div className={cn("relative flex flex-col w-60 h-70 bg-foreground rounded-4xl p-5 gap-10 overflow-hidden", className)}>

      <div
        className='absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none z-10'
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` }: undefined }
      />
      <div className='relative z-10 flex flex-col gap-5'>
        <div className='font-extrabold text-3xl'>{title}</div>
        <div>{description}</div>
      </div>

      <div className='relative z-10 flex flex-col gap-2'>
        <div className='font-extrabold text-4xl'>{price}</div>
        <Button className={cn('rounded-full', classNameButton)}> Get Started </Button>
      </div>
    </div>
  )
}

export default PricingCard