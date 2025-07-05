import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'

const WeeklySatsang = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Weekly Satsang"/>

        <section
        className="flex flex-row max-lg:flex-col-reverse justify-center gap-8 px-12 my-20 max-lg:my-12 "
        >
            <div className='text-balance p-12 max-sm:p-0 flex flex-col items-center justify-center w-1/2 max-lg:w-full font-palanquin text-center text-black text-lg leading-8 max-sm:text-base max-sm:leading-7'>
                    <p className='font-bold text-primary-maroon'>Join us every Saturday evening <br /> from <span className='underlined decoration-solid'>5:30 pm to 8:30 pm</span> for our weekly satsangs. </p>
                    <br />
                    <p className=''>Experience the joy of singing Madhurageethams, engaging in Namasankirtan, and enlightening discourses on Srimad bhagavatam by Brahmasri Ravi Teja ji. Each satsang concludes with meditation, a collective prayer, and harathi. </p>
                    <br />
                    <p className=''>All are warmly invited to participate and benefit from the boundless grace of the Divine!</p>
            </div>
            <div className="w-1/2 max-lg:w-full flex max-lg:h-[300px]" >
                <img src="/assets/images/pc6.jpeg"
                    alt="Satsang"
                    className='object-cover'
                />
            </div>
        </section>
        
       
        <section className='px-48 padding-y max-lg:p-12 text-center bg-beige mt-12'>
            <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon'>Why Satsang?</h1>
            <div className='font-palanquin text-black text-lg max-sm:text-base max-sm:leading-7 leading-8 mt-6'>
                <p className='text-balance'>
                <span className='font-bold'>Satsang, meaning "company of the Truth"</span> or noble company, holds profound transformative power as emphasized in our scriptures. Just as a few moments in the company of Narada Muni transformed the ruthless hunter Ratnakar into the revered sage Valmiki, illustrating the profound impact of associating with the righteous.
                In satsang, the <span className='underlined decoration-solid'>collective potency of prayer and meditation multiplies </span>, swiftly bringing positive changes into our lives.
                </p>
                <br/>
                <p className='text-balance'>
                Moreover, <span className='underlined decoration-solid'>chanting the Divine Names </span> aloud not only benefits the individual but also purifies both the chanter and the listener, as well as the very environment. It is our heartfelt aspiration that everyone worldwide experiences the uplifting joy of namasankirtan and satsang.
                </p>
            </div>
        </section>

        <section className='px-24 padding-y max-md:px-12'>
                <div className='flex flex-col gap-10'>
                    <div>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Session Information
                        </h1>
                        {/* fix the padding for bulletin */}
                        <ul className='mt-2 px-5 font-palanquin text-black list-disc text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                            <li> Madhurageetham Singing</li>
                            <li>Namasankirtan & Meditation</li>
                            <li>Discourse - stories from Srimad bhagavatam, by Brahmasri Ravi Teja ji</li>
                            <li>Mass Prayer</li>
                            <li>Harathi</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Schedule
                        </h1>
                        <p className='mt-2 font-palanquin text-left text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                            Every Saturday. From 5:30pm to 8:30pm (SGT)
                        </p>
                    </div>

                    <div>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Location
                        </h1>
                        <p className='mt-2 font-palanquin text-left text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                        Namadwaar Singapore
                        448 Serangoon Road, #02 – 01
                        <br/>
                        (Opp. Sri Srinivasa Temple)
                        </p>
                    </div>
                    
                </div>

        </section>
        
    </main>
  )
}

export default WeeklySatsang