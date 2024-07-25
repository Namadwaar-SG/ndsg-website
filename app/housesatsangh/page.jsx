'use client'
import Carousel from '@app/components/common_components/Carousel'
import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import { carouselpics } from '@constants/fixed';
import Image from 'next/image';


const HouseSatsangh = () => {
  return (
    <main>
        <SectionHeader sectionLabel="House Satsangh"/>

        <section>
          <div className='padding-y px-32 max-sm:px-10'>
              <p className='font-palanquin text-center text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:m-0'>
              Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo. </p>          
          </div>
        </section>

        <section className='mt-5 flex justify-center bg-beige'>
          <div className='w-1/2 max-md:w-full'>
            <Carousel autoSlide={true} autoSlideInterval={4000}>
              {carouselpics.map((item) => (
                <Image src={item.imgURL} key={item.label} width={800} height={200} className='object-cover'/>
              ))}
            </Carousel>

          </div>
        </section>
        <section>
          <div className='max-container px-10 padding-y'>
              <div>
                <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon'>
                Interested to host at your house?
                </h1>
                <p className='font-palanquin text-left text-lg max-sm:text-[12px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:mr-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium nibh. Phasellus eleifend id sem ac porttitor. Sed interdum nec justo volutpat mattis. Mauris interdum ante ante. Sed sed odio a quam consectetur dapibus eu sed nunc. In tristique velit in lorem vestibulum, non ultrices lectus imperdiet. Suspendisse aliquam et neque quis euismod.
                </p>
              </div>

              <div className='py-12'>
                <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                    Contact Information
                </h1>
                <p className='font-palanquin text-left text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
                You may reach out to X @ +65 1234 5678 for enquiries.
                </p>
              </div>
              
          </div>
          
        </section>
        
    </main>
  )
}

export default HouseSatsangh