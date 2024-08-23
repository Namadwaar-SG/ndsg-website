'use client'
import React from 'react'
import Button from '@app/components/aboutus_components/Button'
import { upcomingeventdetails } from '@constants/fixed'
import Link from 'next/link'
import CarouselCards from '../common_components/CarouselCards';

const UpcomingEvents = ({props}) => {
  const recent = upcomingeventdetails
  
  return (
    <section>
      {recent.length != 0 && 
      (<div>
        <h1 className='mb-10 text-primary-maroon font-caudex text-center text-4xl max-md:text-3xl max-md:leading-8 font-bold'> Upcoming Events </h1>
        <div>
          {recent.length>3 ? <CarouselCards /> : 
          <div className='flex font-palanquin flex-row justify-center gap-8 max-sm:flex-col'>
            <div className='rounded shadow-lg h-[500px] w-1/3 max-lg:w-1/2 max-md:w-full bg-white'>
              <img className="shadow-lg w-full h-3/5 max-lg:h-1/2 max-sm:h-3/5 object-cover object-top" src="assets/images/gokulashtami.png" alt="Sunset in the mountains"/>
              <div className="h-2/5 max-lg:h-1/2 max-sm:h-2/5">
                <div className="px-6 py-4 leading-8">
                  <h1 className='text-xl font-bold'>Gokulashtami, Brahmotsavam 2024</h1>
                  <div className='mt-3 text-lg leading-7'>Date: 23rd Aug - 1st Sep 2024</div>
                </div>
                <div className='p-5'>
                  <Link href={`/events/upcomingevents/gokulashtami`}><Button label="More Details" type=""/></Link>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>)}

    </section>
    
  )
}

export default UpcomingEvents