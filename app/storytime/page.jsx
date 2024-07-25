import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'
const StoryTime = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Kadhai Kelu Kadhai Kelu"/>
        <section
            className="w-full mt-12 max-sm:mt-8 flex flex-row justify-between gap-32 "
            >
            <div className="relative hidden md:block w-1/2" >
                <Image src="/assets/images/pic2.jpeg"
                    alt="Logo"
                    height={300}
                    width={800}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-1/2 max-md:w-full max-md:padding-x flex justify-center items-center'>
                <p className='font-palanquin text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8 pr-24 max-sm:pr-12'>
                “Kadhai Kelu Kadhai Kelu” is a series of discourse by Brahmasri Ravi Teja ji on portions of Srimad Bhagavatam. In pretium, libero id laoreet aliquam, lorem metus fermentum ante, quis lacinia nisl nisl at turpis. Cras sit amet nibh id nisi eleifend pellentesque. 
                </p>
            </div>

        </section>

        <div className='max-container padding-y px-10'>
            <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon'> The significance of listening.</h1>
            <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:mr-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium nibh. Phasellus eleifend id sem ac porttitor. Sed interdum nec justo volutpat mattis. Mauris interdum ante ante. Sed sed odio a quam consectetur dapibus eu sed nunc. In tristique velit in lorem vestibulum, non ultrices lectus imperdiet. Suspendisse aliquam et neque quis euismod.
            <br/>
            <br/>
            Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo.
            </p>
        </div>

        <div className='max-container padding-y px-10'>
            <section className='flex flex-row max-sm:flex-col gap-10'>
                <div className='flex flex-col gap-10'>
                    <div className=''>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Schedule
                        </h1>
                        <p className='font-palanquin text-left text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
                            Every Saturday. From 6:00pm to 7:00pm (SGT)
                        </p>
                    </div>

                    <div className=''>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Location
                        </h1>
                        <p className='font-palanquin text-left text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
                        Namadwaar Singapore
                        448 Serangoon Road, #02 – 01
                        (Opp. Sri Srinivasa Temple)
                        </p>
                    </div>
                    
                </div>
                
                <div className='w-1/2 max-sm:w-full'>
                    <Image src="/assets/images/phamplet.png"
                        alt="Logo"
                        height={300}
                        width={800}
                        className='w-full h-full object-cover'
                    />
                </div>
            </section>

        </div>
        
    </main>
  )
}

export default StoryTime