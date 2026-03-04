import { cn } from '@/lib/utils';
import React from 'react'

type FeatureRowProps = {
  label: string;
  contains: [boolean, boolean, boolean]; //contains feature
  isFirst?: boolean;
};

export const FeatureRow = ({ label, contains, isFirst}: FeatureRowProps) => {

  return (
    <div className={cn('border-b border-foreground/20 grid w-full grid-cols-[1fr_240px_240px_240px] items-center gap-x-10 py-2 font-normal',
          isFirst && "border-t"
    )}>
      <span>{label}</span>
      {contains.map((plan, i) => (
        <img
          key={i}
          src={plan ? "/Images/Icons/Exports/checkmark-icon.svg" : "/Images/Icons/Exports/null-icon.svg"}
          alt=""
          aria-hidden="true"
          className="h-5 w-5 justify-self-center"
        />
      ))}
      </div>
  )
}
