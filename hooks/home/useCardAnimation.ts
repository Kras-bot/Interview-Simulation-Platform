import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { RefObject } from 'react'

export function useCardAnimation(cardRef1: RefObject<HTMLImageElement|null>,
                                cardRef2: RefObject<HTMLImageElement|null>,
                                cardRef3: RefObject<HTMLImageElement|null>)
{
  useGSAP(() => {
    const cards = [cardRef1.current, cardRef2.current, cardRef3.current];
    if (!cards.length) return;

    //Intro animation
    gsap.fromTo([cardRef1.current, cardRef2.current, cardRef3.current],
      { y:50, opacity:0 },
      { y:0, opacity:1, duration:1, stagger:0.15 , delay:1});

    //Hover handlers
    cards.forEach((card) => {
      const onEnter = () => {
        gsap.to(card, {scale:1.1, duration:0.2, ease:"power2.out", overwrite: "auto"});
      };
      const onLeave = () => {
        gsap.to(card, {scale:1, duration:0.2, ease:"power2.out", overwrite: "auto"});
      };

      card?.addEventListener("mouseenter", onEnter);
      card?.addEventListener("mouseleave", onLeave);
    })
    
  }, []);




}