import React from 'react'
import Marquee from 'react-fast-marquee'

export default function MarqueeText() {
  return (
    <div className='mb-40'>
      <Marquee className=' text-[60px] lsm:text-[70px] esm:text-[80px] ew:text-[90px] md:text-[101.25px] font-abril text-[#BDD2B6]'>There is no sincere love than the love of food. &nbsp;</Marquee>
      <Marquee direction='right' className=' text-[60px] lsm:text-[70px] esm:text-[80px] ew:text-[90px] md:text-[101.25px] font-abril text-[#BDD2B6]'>If more of us valued food and cheer and song above hoarded gold, it would be a merrier world. &nbsp;</Marquee>
      <Marquee className=' text-[60px] lsm:text-[70px] esm:text-[80px] ew:text-[90px] md:text-[101.25px] font-abril text-[#BDD2B6]'>Let food be thy medicine and medicine be thy food &nbsp;</Marquee>
    </div>
  )
}
