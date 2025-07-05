'use client'
import Carousel from '@app/components/common_components/Carousel'
import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import { carouselpics, houseSatsangPics } from '@constants/fixed';
import Image from 'next/image';


const HouseSatsang = () => {
  return (
    <main>
        <SectionHeader sectionLabel="House Satsang"/>

        <section className='px-48 max-md:px-12 padding-y flex flex-col justify-center items-center gap-12'>
            <p className='text-balance font-palanquin text-center text-black text-lg max-sm:text-base max-sm:leading-7 leading-8 '>
            Introducing our recent initiative, <strong>House Satsang</strong> where the <span className='underlined decoration-solid'>sacred vibrations of Namasankirtan and enlightening discourses come directly to your doorstep.</span> This Seva is done for the sake of peace, harmony and joy in the homes of the devotees who host these Satsangs. The sole focus is prayer and chanting of the Mahamantra and does not involve any monetary or ritualistic commitment. You don’t need to worry about preparing meals; a simple offering of milk and a few dry fruits for the deity suffices.
            </p>
            <p className='text-balance font-palanquin text-center text-black text-lg max-sm:text-base max-sm:leading-7 leading-8 '>
            At House Satsang, we bring the essence of satsang — <span className='italic underlined decoration-wavy'>meaningful spiritual company</span> — into the comfort of your home. Whether for an hour or longer, our dedicated team conducts soul-enriching sessions filled with chanting and short discourses, tailored to your preference. You get to experience an atmosphere of peace, reflection, and spiritual growth right where you live.
            </p>
            <p className='text-balance font-palanquin text-center font-bold text-primary-maroon text-lg max-sm:text-base max-sm:leading-7 leading-8 '>
            Embrace this opportunity to elevate your spiritual journey with the power of collective prayer and meditation in your own space.
            </p>
        </section>

        <section className='mt-5 flex justify-center bg-beige'>
          <div className='w-1/2 max-md:w-full'>
            <Carousel autoSlide={false} autoSlideInterval={4000}>
              {houseSatsangPics.map((item) => (
                <Image src={item.imgURL} key={item.label} fill className='object-cover h-full w-full'/>
              ))}
            </Carousel>

          </div>
        </section>

        <section className='px-48 max-md:px-12 padding-y'>
                <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon'>
                Interested to host at your house?
                </h1>
                <p className='mt-6 font-palanquin text-left text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                Here's what a standard one-hour session might look like:</p>
                <ul className='mt-4 pl-5 list-disc font-palanquin text-left text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                  <li>First 30 minutes: Pravachan on Srimad bhagavatam or Kalidharma undhiyar</li>
                  <li>Next 20 minutes: Nama chanting</li>
                  <li>Next 5 minutes: Prayer specifically for the host</li>
                  <li>Last 5 minutes: Harathi and Prasad offering</li>
                </ul>
                <p className='mt-6 font-palanquin text-left text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                Rest assured, these sessions are <span className='underlined decoration-solid'>fully customizable based on your preferences and needs </span>, ensuring a personalized and enriching spiritual experience in the comfort of your own home. We look forward to sharing this journey with you!</p>

              <div className='padding-y'>
                <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                    Contact Information
                </h1>
                <p className='font-palanquin text-left text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                Please reach out to Mrs. Kamalahasini @ +65 9187 6416 for enquires or to find out more!
                </p>
              </div>
        </section>
        
    </main>
  )
}

export default HouseSatsang