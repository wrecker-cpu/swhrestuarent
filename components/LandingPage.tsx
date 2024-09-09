import React from 'react'
import HeroSection from './HeroSection'
import DinnerSection from './DinnerSection'
import BookNowSection from './BookNowSection'
import MarqueeText from './MarqueeText'
import Layout from './Layout'
import SideBar from './SideBar'


export default function LandingPage() {
  return (
    <div className='bg-[#ffffff] '>
    <div className='max-w-[1400px] mx-auto '>
      
      <Layout>
      
      <HeroSection/>
      <DinnerSection/>
      <BookNowSection/>
      <MarqueeText/>
      </Layout>

    </div>
    </div>
  )
}
