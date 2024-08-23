import Carousel from '@app/components/common_components/Carousel'
import React from 'react'
import { carouselpics } from '@constants/fixed';
import Image from 'next/image';
import { eventpics } from '@constants/fixed'

export function generateStaticParams() {
  return [{ eventLabel: '0' }, { eventLabel: '1' }, { eventLabel: '2' }, { eventLabel: '3' }]
}


const EventExample = ({params}) => {
  return (
    <main>
        <section className='py-12 px-10 max-sm:p-8 bg-primary-maroon'>
          <div className='relative'>
            <h1 className='font-caudex text-4xl max-md:text-2xl max-sm:text-xl font-bold text-center text-beige'>{eventpics[params.eventLabel].title}</h1>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute inset-y-0 left-0 max-sm:w-3 max-sm:h-3 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          

        </section>

        <section className='flex justify-center bg-beige'>
          <div className='w-1/2 max-md:w-full'>
            <Carousel autoSlide={true} autoSlideInterval={4000}>
              {carouselpics.map((item) => (
                <Image src={item.imgURL} key={item.label} width={800} height={200} className='object-cover'/>
              ))}
            </Carousel>

          </div>
        </section>
        <section>
          <div className='max-container padding-y px-10 max-sm:p-8'>
              <p className='font-palanquin text-left text-black text-lg max-sm:text-[10px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:m-0'>
              Aliquam pellentesque tortor iaculis venenatis rutrum. Vestibulum nibh nulla, sollicitudin sed ultricies vel, interdum vel ante. Sed id libero ut ligula rutrum placerat vitae sed lectus. Nullam venenatis, nunc nec dignissim aliquet, est nulla facilisis lorem, at sagittis purus purus sed lectus. Etiam ut leo luctus, pulvinar enim non, fermentum quam. Nunc facilisis suscipit odio ut posuere. Aliquam non arcu turpis.</p>
          </div>

          <div className='max-container px-10'>
              <h1 className='font-caudex text-4xl max-md:text-2xl max-md:leading-8 font-bold text-primary-maroon'>What are Madhurageethams?</h1>
              <p className='font-palanquin text-left text-lg max-sm:text-[10px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:mr-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pretium nibh. Phasellus eleifend id sem ac porttitor. Sed interdum nec justo volutpat mattis. Mauris interdum ante ante. Sed sed odio a quam consectetur dapibus eu sed nunc. In tristique velit in lorem vestibulum, non ultrices lectus imperdiet. Suspendisse aliquam et neque quis euismod.
              <br/>
              <br/>
              Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo.
              </p>
              <div className='padding-y'>
                <h1 className='font-caudex text-4xl max-md:text-2xl max-md:leading-8 font-bold text-primary-maroon'>
                  Winners of 2023
                </h1>
                {/* fix the padding for bulletin */}
                <ul className='px-5 py-3 font-palanquin list-disc text-lg max-sm:text-[10px] max-sm:leading-7 leading-8'>
                    <li> Madhurageetham Singing</li>
                    <li>Namasankeertan & Meditation</li>
                    <li>Discourse - stories from Srimad Bhagavatam, by Brahmasri Ravi Teja ji</li>
                    <li>Mass Prayer</li>
                    <li>Harathi</li>
                </ul>
              </div>
              
          </div>
          
        </section>
        
    </main>
  )
}

export default EventExample