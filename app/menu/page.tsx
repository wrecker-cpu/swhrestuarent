import BookNowSection from '@/components/BookNowSection'
import DinnerSection from '@/components/DinnerSection'
import HeroSection from '@/components/HeroSection'
import Layout from '@/components/Layout'
import MarqueeText from '@/components/MarqueeText'
import ChefSection from '@/components/MenuPage/ChefSection'
import MenuHeroSection from '@/components/MenuPage/MenuHeroSection'
import MenuItem from '@/components/MenuPage/MenuItem'
import React from 'react'

export default function MenuPage() {
  return (
    <div className='bg-[#ffffff] '>
    <div className='max-w-[1400px] mx-auto'>
      
      <Layout>
        <MenuHeroSection/>
        <MenuItem/>
        <BookNowSection/>
        <ChefSection/>
      </Layout>
    </div>
    </div>
  )
}
