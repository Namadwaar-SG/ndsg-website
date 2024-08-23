'use client'
import SectionHeader from '@app/components/common_components/SectionHeader'
import React, { useState } from 'react'
import ItihasaClassCard from '@app/components/common_components/ItihasaClassCard'
import Image from 'next/image'
import Link from 'next/link'

const Classes = () => {

  const itihasaList = [
    {
        title: "Srimad Bhagavatham",
        description: "Srimad Bhagavatham, one of the most significant scriptures, holds gems of spiritual knowledge and serves as a pathway to enlightenment in this age. Our classes are designed to help you extract the essence of each verse and practically apply it to the current times. Classes are offered in Tamil & Telugu languages.",
        day:"Wednesday (Telugu), Thursday, Saturday",
        time:"10:30 - 11:30am | 10:30 - 11:30am | 4:00 - 5:00pm ",
        location:"Serangoon 414, 689590"
    },
    {
        title: "Ramayana",
        description: "Ramayana, a timeless epic in Hinduism, narrates the life of Lord Rama and contains plenty of teachings on Dharma that a human can idealize. In our Ramayana classes, Brahmasri Ravi Teja ji expounds on the various nuances and implications of the text, giving one an open space for discussion. Classes are offered in Tamil language.",
        day:"Every Sunday",
        time:"5:00pm - 6:00pm",
        location:"Serangoon 414, 689590"
    },
    {
        title: "Sanskrit",
        description: "We also offer sanskrit classes where Brahmasri Ravi Teja ji teaches basic Sanskrit writing, reading and grammar. Through this, students can gradually build their vocabulary by learning commonly used words and roots (dhatus).",
        day:"Every Saturday",
        time:"5:00pm - 6:00pm",
        location:"Serangoon 414, 689590"
    }

  ]

  return (
    <main>
        <SectionHeader sectionLabel="Classes"/>
        <section>
          <div className='padding-y px-48 max-lg:p-10 font-palanquin text-center text-balance text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
              <p className=''>
              Namadwaar Singapore is dedicated to upholding and propagating the principles set forth in the ancient Indian scriptures. 
              To serve this purpose, we offer various <span className='underlined decoration-solid'>Ithihasa/Purana classes </span>such as <strong> Srimad Bhagavatam, Srimad Ramayana and Sanskrit </strong>.  These classes are aimed at those interested in deepening their understanding and practice of the teachings from these texts.
              </p>
          </div>
        </section>

        <section>
            <div className='h-auto bg-hero bg-center bg-cover lg:bg-fixed relative'>
             <div className='py-36 max-md:py-16 flex flex-col gap-8 justify-center items-start px-16 w-1/2 h-full whitespace-normal bg-dark-red bg-opacity-75 max-lg:w-full'>
                <h1 className='font-caudex text-beige text-4xl max-md:text-3xl max-md:leading-8 max-sm:text-2xl font-bold'>Students will gain:</h1>
                <ul className='pl-6 flex flex-col gap-6 font-palanquin text-beige text-xl max-md:text-lg max-md:leading-8 max-sm:text-sm list-disc'>
                    <li>Deep understanding of Spiritual principles
                    </li>
                    <li>Insights into ancient Indian culture and values
                    </li>
                    <li>Moral and ethical values through narratives
                    </li>
                    <li>Appreciation for the literary aspects of Sanskrit texts and scriptures 
                    </li>
                    <li>Proficiency in classical language by recitation and study </li>
                    <li>Personal Growth through introspection and mindfulness</li>
                
                </ul>
             </div>
            </div>
        </section>

        <section className='mt-20 max-container py-10'>
            <div className='flex justify-evenly max-sm:items-center max-sm:flex-col px-5 gap-8'>
                <div className='group overflow-hidden relative w-1/3 aspect-square max-sm:w-5/6  shadow-2xl cursor-pointer'>
                    <Link href='/gopakuteeram'>
                    <img className='h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000' src="/assets/images/gk.jpg"
                    />  
                    <div className='absolute inset-0 rounded-t-3xl bg-gradient-to-b from-transparent via-transparent via-70% to-primary-maroon to-90% '>
                        <div className='absolute inset-x-0 bottom-0 p-6'>
                            <h1 className='font-caudex font-bold text-white text-center text-xl'>Gopakuteeram</h1>
                        </div>
                    </div>
                    </Link>
                    

                </div>
                <div className='group overflow-hidden relative w-1/3 aspect-square max-sm:w-5/6  shadow-2xl cursor-pointer'>
                    <Link href="/yuvagk">
                        <img className='h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000' src="/assets/images/yuva.jpg"
                        />  
                        <div className='absolute inset-0 rounded-t-3xl bg-gradient-to-b from-transparent via-transparent via-70% to-primary-maroon to-90% '>
                            <div className='absolute inset-x-0 bottom-0 p-6'>
                                <h1 className='font-caudex font-bold text-white text-center text-xl'>Yuva Gopakuteeram</h1>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        </section>
        <section className='mt-20 max-container'>
            <h1 className='text-center font-caudex font-bold text-4xl max-md:text-2xl max-md:leading-8 px-16 text-primary-maroon'>Itihasa and Purana Classes</h1>
            <div className='mt-8 flex flex-col items-center gap-4 px-48 max-md:px-10  font-palanquin text-center text-balance text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                <p>
                Our Puranic classes at Namadwaar, both <strong>Srimad Bhagavatham and Ramayana</strong> strive to deepen one's understanding of the <span className='underlined decoration-solid'>philosophy, theology, and spiritual wisdom</span> embedded in its verses. 
                </p>
                <p>
                They typically begin with a recitation of selected verses, followed by a detailed explanation of their meaning, context, and significance while also picking up basic Sanskrit words. 
                </p>
            </div>
            <div className='mt-16 grid px-16 grid-cols-1 lg:grid-cols-3 gap-12'>
                    {itihasaList.map((item) => (
                        <ItihasaClassCard title={item.title} description={item.description} day={item.day} time={item.time} location={item.location}/>
                    ))}
                    
            </div>
        </section>

        <section className='my-32 px-16 text-center'>
            <h1 className='font-caudex text-4xl max-sm:text-3xl font-bold text-primary-maroon'>
                Join for classes!
            </h1>
            <p className='mt-5 font-inter text-black text-base max-sm:leading-7 leading-8'>
            You may reach out to Brahmasri Ravi Teja ji @ +65 8542 9284 for enquiries.
            </p>
        </section>
    </main>
  )
}

export default Classes