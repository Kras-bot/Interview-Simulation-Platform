"use client";
import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SquiggleReveal = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const maskRectRef = useRef<SVGRectElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      maskRectRef.current,
      { x: -1400 },
      { x: 200, duration: 2, ease: "none", repeat: 0 }
    )
  })
  return (
    <>
    <div ref={wrapRef} className='absolute top-[11%] left-[20%] -z-10'>
      <svg width="1218" height="508" viewBox="0 0 1218 508" fill="none">
        
        <defs>
          <mask id="reveal">
            <rect width="1200" height="500" fill="black"/>
            <rect ref={maskRectRef} x="-200" y="0" width="1500" height="500" fill="white" />
          </mask>
        </defs>
        
        <path d="M0 2.5C0 2.5 43 2.50003 96.5 2.5C150 2.49997 324.094 2.55828 434.5 76C590.993 180.099 648 215.5 797.5 195C953.637 173.59 1036.06 181.547 1112 238.5C1226 324 1135.5 472.5 1216.5 505"
        stroke="#EB50B8"
        strokeWidth="5"
        fill="none"
        mask="url(#reveal)"
        />

      </svg>
    </div>

    </>
    
  )
}

export default SquiggleReveal