import React from 'react'
import WhoWeAre from './components/homepage_components/WhoWeAre'
import WhatWeDo from './components/homepage_components/WhatWeDo'
import UpcomingEvents from './components/homepage_components/UpcomingEvents'
import Hero from './components/homepage_components/Hero'
import Link from 'next/link'
import Button from './components/aboutus_components/Button'

//localhost:3000/
const HomePage = () => {
  return (
    <main>
      <div className='py-4 px-8 flex gap-4 justify-center items-center bg-primary-maroon'>
        <p className='font-caudex text-white text-center text-lg max-md:text-sm'>Join us for Gokulashtami 2024 celebrations, at Namadwaar! </p>
        <Link href={`/events/upcomingevents/0`}><Button label="More Details" type=""/></Link>
      </div>

      <section className='padding lg:bg-background-pastel bg-cover bg-beige'>
        <Hero/>
      </section>
      <section className='padding padding-y'>
        <WhoWeAre/>
      </section>
      <section className='padding padding-y'>
        <WhatWeDo/>
      </section>
      <section className='padding padding-y bg-beige'>
        <UpcomingEvents/>
      </section>
      
    </main>
  )
}

export default HomePage