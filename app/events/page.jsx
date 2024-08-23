import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'
import { eventpics } from '@constants/fixed'
import UpcomingEvents from '@app/components/homepage_components/UpcomingEvents'
import Link from 'next/link'

const Events = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Events"/>
        <section>
          <div className='flex flex-col items-center gap-8 padding-y px-48 max-lg:p-10 font-palanquin text-center text-balance text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
              <p>
              Namadwaar Singapore organizes a variety of events throughout a year such as contests, community events, and celebrations during festive occasions, bringing people together in a close-knit space. 
              </p>
              <p>These include the annual <strong> Madhurageetham Music Contest, Gopakuteeram Annual Day, </strong> which have garnered immense interest from the local community in Singapore over the past 8 years. Our celebrations of Gokulashtami, Rama Navami, leave people with warm hearts after gathering for a <span className='underlined decoration-solid'> blissful evening of song, chant and dance! </span>
              </p>
          </div>
        </section>

        <section>
          <div className='mx-5 max-sm:mx-20 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 justify-center gap-5'>
            {eventpics.map((item, index) => (
                
                  <div className='group relative overflow-hidden cursor-pointer'>
                    <Link href={`/events/${index}`}>
                      <img className='w-full aspect-[6/5] object-cover group-hover:scale-125 transition-transform duration-1000' src={item.imgURL}
                      />                
                      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black '>
                        <div className='absolute inset-0 flex flex-col items-center justify-end p-5 text-center'>
                          <h1 className='text-2xl max-lg:text-lg font-palanquin text-white'>{item.title}</h1>
                        </div>
                      </div>
                    </Link>
                  </div>
              
                
            ))}
          </div>
        </section>

        <section className='padding-x py-10 mt-20 bg-beige'>
          <UpcomingEvents/>
        </section>
    </main>
  )
}

export default Events