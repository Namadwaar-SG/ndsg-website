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
          <div className='max-container padding-y px-36 max-lg:p-10'>
              <p className='font-palanquin text-center text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
              Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo.</p>          </div>
        </section>

        <section>
          <div className='mx-5 max-sm:mx-20 grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-5'>
            {eventpics.map((item, index) => (
                
                  <div className='group relative overflow-hidden cursor-pointer'>
                    <Link href={`/events/${index}`}>
                      <img className='h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000' src={item.imgURL}
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

        <section className='padding-x py-10 mt-20'>
          <UpcomingEvents/>
        </section>
    </main>
  )
}

export default Events