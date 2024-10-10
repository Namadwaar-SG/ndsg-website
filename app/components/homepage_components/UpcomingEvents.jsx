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
      <div>
        <h1 className='mb-10 text-primary-maroon font-caudex text-center text-4xl max-md:text-3xl max-md:leading-8 font-bold'> Upcoming Events </h1>
        <div>
          {recent.length>3 ? <CarouselCards /> : 
            <div className='flex font-palanquin flex-row justify-center gap-8 max-sm:flex-col'>
              {recent.map((item,i) => (
                <div className='rounded shadow-lg h-[500px] w-1/3 max-lg:w-1/2 max-md:w-full bg-white'>
                  <img className="shadow-lg w-full h-3/5 max-lg:h-1/2 max-sm:h-3/5 object-cover object-top" src={item.imgURL[0]} alt="Sunset in the mountains"/>
                  <div className="h-2/5 max-lg:h-1/2 max-sm:h-2/5">
                    <div className="px-6 pt-4 leading-8">
                      <h1 className='text-lg font-bold'>{item.title}</h1>
                      <div className='mt-3 leading-7'>Time: {item.time} <br/> Date: {item.date} </div>
                    </div>
                    <div className='p-5'>
                      <Link href={`/events/upcomingevents/${i}`}><Button label="Click to Join" type=""/></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          } 
        </div>
      </div>
    </section>
    
  )
}

export default UpcomingEvents