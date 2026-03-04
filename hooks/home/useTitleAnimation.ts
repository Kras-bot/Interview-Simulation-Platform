import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { RefObject } from 'react'

export function useTitleAnimation(heroTextRef1: RefObject<HTMLSpanElement|null>,
                                  heroTextRef2: RefObject<HTMLSpanElement|null>,
                                  heroTextRef3: RefObject<HTMLSpanElement|null>
) {
  useGSAP(() => {
    gsap.fromTo([heroTextRef1.current, heroTextRef2.current, heroTextRef3.current],
      {y:50, opacity:0},
      {y:0, opacity:1, duration:1, stagger:0.4}
    );
  })
}

