import Carousel from '@app/components/common_components/Carousel'
import React from 'react'
import Image from 'next/image';
import { eventpics } from '@constants/fixed'
import Link from 'next/link';

export function generateStaticParams() {
  return [{ eventLabel: '0' }, { eventLabel: '1' }, { eventLabel: '2' }, { eventLabel: '3' }]
}


const EventExample = ({params}) => {
  return (
    <main>
        <section className='py-12 px-10 max-sm:p-8 bg-primary-maroon'>
          <div className='relative'>
            <h1 className='font-caudex text-4xl max-md:text-2xl max-sm:text-xl font-bold text-center text-beige'>{eventpics[params.eventLabel].title}</h1>
            <Link href="/events">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute inset-y-0 left-0 max-sm:w-3 max-sm:h-3 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            </Link>
          </div>
          

        </section>

        <section className='flex justify-center bg-beige'>
          <div className='w-1/2 max-md:w-full'>
            <Carousel autoSlide={true} autoSlideInterval={4000}>
              {eventpics[params.eventLabel].carouselpics.map((item,i) => (
                <Image src={item} key={i} width={800} height={200} className='w-full aspect-[6/5] object-cover'/>
              ))}
            </Carousel>

          </div>
        </section>
        <section>
          <div className='px-48 max-md:px-12 mt-16 max-container'>
              {eventpics[params.eventLabel].content.map((item,i) => (
                <div key={i}>
                  <p className='font-palanquin text-left text-black text-lg max-sm:text-base max-sm:leading-7 leading-8 mt-6'>
                  {item}
                  </p>
                  <br/>
                </div>                
              ))}
              {eventpics[params.eventLabel].ytlink && (
                <div>
                  <Link href={eventpics[params.eventLabel].ytlink} className='font-palanquin text-lg text-teal-600 max-sm:text-base mt-6 underline underline-offset-4'>
                    {eventpics[params.eventLabel].ytcontent}
                  </Link>
                </div>
              )}
              <hr className="my-6 w-full h-px bg-gray-300 border-0 rounded"/>
                <p className='mb-12 font-palanquin text-left text-primary-maroon text-xl max-sm:text-base max-sm:leading-7 leading-8'>{eventpics[params.eventLabel].date}</p>
              
          </div>

          
        </section>
        
    </main>
  )
}

export default EventExample