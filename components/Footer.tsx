import { InstaSvg, LinkedSvg, SocioLinks, TwitterSvg } from '@/svgs/svg'
import React from 'react'
import Magnetic from './Magnetic'
import { FooterData } from '@/data/data'

export default function Footer() {
  return (
    <div className='max-w-[1200px] w-full ew:w-[90%] em:mb-0 ew:mb-6 vem:mb-8 sm:mb-10 md:mb-12 emd:mb-16 lg:mb-20 rounded-t-[150px] ew:rounded-3xl mx-auto text-[#F8EDE3] bg-[#1E1E1E]'>
        <div className="max-w-[30rem] px-0 ew:px-8 sm:px-0 py-10 mx-auto">
      <p className="uppercase text-4xl font-montserrat font-semibold flex justify-center mb-8">logo</p>
      <ul className="uppercase w-[90%] mx-auto ew:mx-0 ew:w-full flex-wrap gap-4 justify-center esm:gap-6 em:gap-8 ew:gap-0 ew:flex-row flex mb-8 ew:justify-between">
        {FooterData.links.map((item)=>{
          return(
          <Magnetic key={item.id}><li className='cursor-pointer'>{item.name}</li></Magnetic>)
        })}
      </ul>
      <form className='flex flex-col vem:flex-row w-[90%] mx-auto ew:mx-0 ew:w-full mb-8 gap-4'>
        <input className='pl-2 w-full vem:w-[70%] text-base py-2  text-start rounded-xl  border border-[#F8EDE3] bg-inherit text-[#F8EDE3]' placeholder='Email'></input>
        <Magnetic>
        <button className='px-10 py-2 font-montserrat font-semibold text-lg bg-[#F8EDE3] text-black rounded-xl'>Login</button>
        </Magnetic>
      </form>
      <div>
        <ul className='flex justify-center items-center gap-4'>
        {
          SocioLinks.map((item)=>{
            return(<Magnetic key={item.id}><li className='w-6 flex justify-center cursor-pointer'>{item.icon}</li></Magnetic>) 
          })
        }
        </ul>
      </div>
      </div>
      
    </div>
  )
}
