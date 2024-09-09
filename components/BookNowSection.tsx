import React from 'react'
import Magnetic from './Magnetic'

export default function BookNowSection() {
  return (
    <div className='max-w-[1200px] px-10 mx-auto mb-24 lsm:mb-32 esm:mb-36 ew:mb-40'>
    <div id='bg-container'>
      <div className='bg-[#798777d3] backdrop-blur-sm max-w-[35rem] p-10'>
        <p className='font-abril mb-10 text-[#F3F3F3] em:text-start text-center text-[40px] lsm:text-[45px] esm:text-[48px] em:text-[52px]'>FROM BURGERS TO STEAK TO PIZZA. CHECK OUT OUR MENU</p>
        <div className='flex em:justify-start justify-center'>
          <Magnetic>
        <button className='mb-5 px-12 py-2 bg-[#f3f3f3] text-black rounded-xl uppercase '>Book Now</button>
        </Magnetic>
        </div>
      </div>
    </div>
    </div>
  )
}
