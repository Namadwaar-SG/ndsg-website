import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'

const AkhandaNama = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Akhanda Nama"/>

        <section
        className="flex flex-row max-lg:flex-col my-20 max-md:mb-0 bg-beige"
        >
            <div className="w-1/2 max-lg:w-full max-lg:h-[400px] flex" >
                <img src="/assets/images/satsang.jpeg"
                    alt="Satsangh"
                    className='object-cover'
                />
            </div>
            <div className='text-balance p-20 max-lg:p-12 flex items-center justify-center w-1/2 max-lg:w-full font-palanquin text-center text-black text-lg leading-8 max-sm:text-base max-sm:leading-7'>
                    <p>
                    On the last Saturday of every month, we have <strong>Akhanda Nama</strong> sessions at Namadwaar - <span className='underlined decoration-solid'>chanting of the Mahamantra from 8am to 8pm.</span> The practice of Akhanda Nama means the continuous repetition of name of God without any interruptions for a prolonged time.
                    </p>
            </div>
            
        </section>

        <section
        className="flex max-lg:flex-col-reverse my-20 max-md:my-0 bg-beige"
        >
            
            <div className='text-balance p-20 max-lg:p-12 flex flex-col gap-8 items-center justify-center w-1/2 max-lg:w-full font-palanquin text-center text-black text-lg leading-8 max-sm:text-base max-sm:leading-7'>
                    <p>This is a form of meditation where one has to hold utmost concentration and focus to channelise his thoughts to a positive anchor. The anchor here is the utterance of God’s name, believed to purify one’s mind and dispel negative influences.
                    </p>
                    <p className='font-bold text-primary-maroon'>
                    Thus, we practice doing Akhanda Nama at least once a month and collectively, which creates an insurmountable effect on everyone. 
                    </p>
            </div>
            <div className="w-1/2 max-lg:w-full max-lg:h-[400px] flex" >
                <img src="/assets/images/chanting.jpg"
                    alt="chanting"
                    className='object-cover'
                    height={800}
                    width={1200}
                />
            </div>
            
        </section>

        <section className='relative h-[600px] max-lg:h-[400px]'>
                <img src="/assets/images/chant.jpg"
                    alt="chant"
                    className='w-full h-full object-cover'
                />
                <div className='absolute h-full w-full bg-black/50 inset-0'>

                </div>
                <div className='absolute inset-0 px-10 flex flex-col justify-center items-center text-center gap-4 text-white'>
                    <h1 className='font-caudex text-4xl max-lg:text-xl font-bold'>Join us any time between 8am to 8pm, <br/> every last Saturday of the month. </h1>
                    <p className='font-palanquin text-2xl max-lg:text-base max-sm:leading-7 leading-8'>Indulge in the reverberations of the Mahamantra in joyous tunes and rhythm.</p>
                </div>

        </section>



        <section className='flex justify-around max-container my-20 px-20 max-sm:p-8 max-lg:flex-col gap-8 max-md:my-10 max-lg:justify-center max-lg:text-center'>
                <div>
                    <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                        Schedule
                    </h1>
                    <p className='font-palanquin text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                        Last Saturday of every month. 8am - 8pm (SGT)
                    </p>
                </div>

                <div>
                    <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                        Location
                    </h1>
                    <p className='text-balance font-palanquin text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                    Namadwaar Singapore
                    448 Serangoon Road, #02 – 01
                    <br/>
                    (Opp. Sri Srinivasa Temple)
                    </p>
                </div>
                
            
        </section>

        
    </main>
  )
}

export default AkhandaNama