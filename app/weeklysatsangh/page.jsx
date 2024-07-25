import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'

const WeeklySatsangh = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Weekly Satsangh"/>
        <div className='padding-y px-10 max-sm:p-8'>
            <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:m-0'>
            Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo.            </p>
        </div>

        <div className='px-10 max-sm:p-8'>
            <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon'>Why Satsangh?</h1>
            <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:mr-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium nibh. Phasellus eleifend id sem ac porttitor. Sed interdum nec justo volutpat mattis. Mauris interdum ante ante. Sed sed odio a quam consectetur dapibus eu sed nunc. In tristique velit in lorem vestibulum, non ultrices lectus imperdiet. Suspendisse aliquam et neque quis euismod.
            </p>
        </div>

        <div className='max-container padding-y px-10 max-sm:p-8'>
            <section className='flex flex-row max-sm:flex-col gap-10 justify-between'>
                <div className='w-1/2 max-sm:w-full flex flex-col gap-10'>
                    <div className=''>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Session Information
                        </h1>
                        {/* fix the padding for bulletin */}
                        <ul className='px-5 font-palanquin text-black list-disc text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
                            <li> Madhurageetham Singing</li>
                            <li>Namasankeertan & Meditation</li>
                            <li>Discourse - stories from Srimad Bhagavatam, by Brahmasri Ravi Teja</li>
                            <li>Mass Prayer</li>
                            <li>Harathi</li>
                        </ul>
                    </div>

                    <div className=''>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Schedule
                        </h1>
                        <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
                            Every Saturday. From 6:00pm to 7:00pm (SGT)
                        </p>
                    </div>

                    <div className=''>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Location
                        </h1>
                        <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
                        Namadwaar Singapore
                        448 Serangoon Road, #02 – 01
                        <br/>
                        (Opp. Sri Srinivasa Temple)
                        </p>
                    </div>
                    
                </div>
            </section>

        </div>
        
    </main>
  )
}

export default WeeklySatsangh