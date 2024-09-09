import { StarVector } from '@/svgs/svg'
import React from 'react'

export default function ContactHeroSection() {
  return (
    <div className="max-w-[1200px] mx-auto mb-24  esm:mb-28 em:mb-32 ew:mb-36 vem:mb-28">
      <div className='mb-24  ew:mb-28 vem:mb-32'>
        <p className='font-abril text-[16vw] esm:text-[15vw] ew:text-[14vw] emd:text-[130px] text-[#6F8867] uppercase text-center '>Contact Us</p>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="w-full flex justify-between gap-4 items-center">
          <div className="border-[0.5px] border-[#BDD2B6] w-full h-0"></div>
          <div className="w-10 h-10">
            <StarVector />
          </div>
          <div className="border-[0.5px] border-[#BDD2B6] w-full h-0"></div>
        </div>
      </div>
    </div>
  )
}
