import BookNowSection from '@/components/BookNowSection'
import ContactHeroSection from '@/components/ContactPage/ContactHeroSection'
import MapPage from '@/components/ContactPage/MapPage'
import Layout from '@/components/Layout'
import ChefSection from '@/components/MenuPage/ChefSection'
import MenuHeroSection from '@/components/MenuPage/MenuHeroSection'
import MenuItem from '@/components/MenuPage/MenuItem'
import React from 'react'

export default function ContactUsPage() {
  return (
    <div className='bg-[#ffffff] '>
    <div className='max-w-[1400px] mx-auto'>
      
      <Layout>
        <ContactHeroSection/>
        <MapPage/>
      </Layout>
    </div>
    </div>
  )
}
