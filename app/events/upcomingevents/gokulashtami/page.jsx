import React from 'react'
import Image from 'next/image'
import { upcomingeventdetails } from '@constants/fixed'
import Button from '@app/components/aboutus_components/Button';



const UpcomingEvent = () => {
  const i = 0
  const lines = upcomingeventdetails[i].details.split("\n");
  return (
    <main>
        <section className='max-container padding-y px-10 max-sm:px-8'>
            <div className='relative'>
                <h1 className='font-caudex text-4xl max-md:text-2xl max-sm:text-xl font-bold text-center'>{upcomingeventdetails[i].title}</h1>
            </div>
        </section>

        <section className='flex justify-center px-12 gap-5'>
            {upcomingeventdetails[i].imgURL.map((item) => (
                <div className='w-1/3 max-md:w-full'>
                    <img src={item} alt="" />
                </div>
            ))}
        </section>

        <section className='max-container mt-10 padding-x padding-y'>
            <div className='flex flex-row justify-start gap-28 font-caudex'>
                <div>
                    <h1 className='text-3xl max-sm:text-lg font-semibold'>Date</h1>
                    <p className='font-palanquin text-left text-black text-xl max-sm:text-[10px] max-sm:leading-7 leading-8'>
                    {upcomingeventdetails[i].date}
                    </p>
                </div>

                <div>
                    <h1 className='text-3xl max-sm:text-lg font-semibold'>Time</h1>
                    <p className='font-palanquin text-left text-black text-xl max-sm:text-[10px] max-sm:leading-7 leading-8'>
                    {upcomingeventdetails[i].time}
                    </p>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
            <div className='pr-28'>
                <h1 className='mb-5 font-caudex text-3xl max-sm:text-lg font-semibold'>Details</h1>
                {lines.map((para,index) => (
                    <div>
                    <p key={index} className='font-palanquin text-left text-black text-xl max-sm:text-[10px] max-sm:leading-7 leading-8'>
                    {para}
                    </p>
                    <br/>
                    </div>
                    
                ))}
            </div>
            <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
            <div className='pr-28'>
                <h1 className='mb-2 font-caudex text-3xl max-sm:text-lg font-semibold'>Contact Information</h1>
                    <p className='font-palanquin text-left text-black text-xl max-sm:text-[10px] max-sm:leading-7 leading-8'>
                    {upcomingeventdetails[i].contactDetails}
                    </p>
            </div>
            {/* <div className='mt-10'><Button label={upcomingeventdetails[i].buttonContent} type="event"/></div> */}
        </section>

    </main>
    
  )
}

export default UpcomingEvent