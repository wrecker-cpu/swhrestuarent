"use client"
import { FooterData } from '@/data/data'
import { CrossSvg } from '@/svgs/svg'
import React from 'react'
import Magnetic from './Magnetic'
import { motion } from 'framer-motion'
import AnimatedPage from '@/util/AnimatedPage'

interface dataFormProps{
  hideComponent: ()=>void
}

export default function SideBar({hideComponent}:dataFormProps) {


    const AnimateUpVariants={
        initial:{
            opacity:0,
            y:-50,
        },
        animate:(index:number)=>({
            opacity:1,
            y:0,
            transition:{
                delay: 0.05 *index
            }
        }
        )
    }

  return (
    <div className="max-w-[1200px] mx-auto mb-24  esm:mb-28 em:mb-32 ew:mb-36 vem:mb-40">
        <div className='w-[90%] relative mx-auto'>
      <ul className=' text-6xl esm:text-7xl flex flex-col items-start font-abril text-[#6F8867] gap-10'>
        {FooterData.links.map((item,index)=>{
            return(
               
                  <AnimatedPage key={item.id} href={item.href}>
                     <Magnetic >
                <motion.li
                variants={AnimateUpVariants}
                initial="initial"
                animate="animate"
                custom={index}
                className='cursor-pointer' >
                    {item.name}
                </motion.li>
                </Magnetic>
                </AnimatedPage>
                
            )
        })}
      </ul>
      <div className='absolute top-[5px] lsm:top-[2px] right-[-16px]'>
        <Magnetic>
        <div onClick={()=>{hideComponent()}} className='px-[11px] py-[4px] lsm:px-[13px] lsm:py-[6px] esm:px-[14px] esm:py-[7px] em:px-4 em:py-2 cursor-pointer rounded-full bg-[#6F8867]'>
        <CrossSvg/>
        </div>
        </Magnetic>
        </div>
      </div>
    </div>
  )
}
