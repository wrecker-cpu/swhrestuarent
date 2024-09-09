"use client"
import gsap from 'gsap';
import React, { useRef, ReactElement, ReactNode, cloneElement, useEffect } from 'react';


interface MagneticProps {
  children: ReactElement; 
}



export default function Magnetic({ children }: MagneticProps) {

    const magnetic = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = magnetic.current;
        if(el){

        const xTo = gsap.quickTo(magnetic.current,"x", {duration:1,ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current,"y", {duration:1,ease: "elastic.out(1, 0.3)"})

    
        el.addEventListener("mousemove",(e)=>{
            const {clientX,clientY}=e;
            const {width,height,left,top}=el?.getBoundingClientRect();
            const x=clientX-(left+width/2);
            const y=clientY-(top+height/2);
            xTo(x*0.5);
            yTo(y*0.5);
        }) 
            

        el.addEventListener("mouseleave",(e)=>{
            
            xTo(0);
            yTo(0);
        }) 
    }
    

      }, []);

  
  return cloneElement(children, { ref: magnetic });
}
