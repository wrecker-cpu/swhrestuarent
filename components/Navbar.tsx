"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { NavbarData } from "../data/data";
import { Hamburger } from '@/svgs/svg';
import Link from 'next/link';
import Magnetic from './Magnetic';
import SideBar from './SideBar';
import AnimatedPage from '@/util/AnimatedPage';
import Image from 'next/image';
import logo from "@/public/image 1-2.png"

export default function Navbar() {

  const [SideShowbar, setShowSidebar] = useState(false)

 

  useEffect(() => {
    if (SideShowbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [SideShowbar]);


  const hideComponent = useCallback(() => {
    setShowSidebar(false);
  }, []);

  const showComponent = () => {
    setShowSidebar(true);
  };

  useEffect(() => {
    if (SideShowbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [SideShowbar]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        hideComponent();
      }
    };

    // Attach listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [hideComponent]);

  return (
    <div className='max-w-[1200px]  sm:w-full  mx-auto mb-14 relative em:mb-16 ew:mb-20 vem:mb-24 md:mb-32'>
      <div className='w-[90%] mx-auto'>
      <div className='flex justify-between items-center sm:items-end'>
        <div className='mt-4 md:mt-0'>
          <div className='w-[74px] h-[74px]'>
            <Image className="w-full h-full object-cover" src={logo} alt="wth" />
          </div>
        </div>
        <div className='h-0 md:h-auto hidden md:block'>
          <ul className='flex ml-12 items-end gap-0 md:h-[92px]'>
            {NavbarData.links.map((item) => (
              <li key={item.id} className='h-full'>
                <AnimatedPage className='w-[6rem] font-montserrat h-full flex justify-center items-end  pb-5 hover:bg-[#BDD2B6] text-center font-thin cursor-pointer' href={`${item.id===1?"/":"menu"}`}>{item.name}</AnimatedPage>
              </li>
            ))}
          </ul>
        </div>
        <div>
          
          <div className='sm:block hidden'>
            <Magnetic>
            <button className='mb-5  px-12 py-2 bg-[#6F8867] text-white rounded-xl'>Login</button>
            </Magnetic>
          </div>

          <div onClick={showComponent} className='block sm:hidden cursor-pointer'><Magnetic><Hamburger/></Magnetic></div>
        </div>
      </div>
      </div>
     {SideShowbar &&  <div className='absolute top-[18px] left-0 w-full bg-white z-10'><SideBar hideComponent={hideComponent}/></div>}
    </div>
  );
}
