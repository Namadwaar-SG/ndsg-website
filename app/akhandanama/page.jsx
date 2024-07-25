import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'

const AkhandaNama = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Akhanda Nama"/>
        <div className='max-container padding-y px-20 max-sm:p-8'>
            <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:m-0'>
            Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo.
            </p>
        </div>

        <div className='max-container padding-y px-20 max-sm:p-8'>
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
                        <br/>
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

export default AkhandaNama