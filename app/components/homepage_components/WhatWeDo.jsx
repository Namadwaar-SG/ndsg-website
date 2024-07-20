'use client'
import React from 'react'
import Button from '@app/components/aboutus_components/Button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { eventpics } from '@constants/fixed'
import Link from 'next/link';

const WhatWeDo = () => {
  const lastThree = eventpics.slice(-3).reverse();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1070 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1070, min: 600 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <section
      className="w-full flex flex-col justify-start gap-8"
    >
      <div>
        <h1 className='font-caudex text-primary-maroon  text-4xl max-md:text-3xl max-md:leading-8 font-bold max-lg:text-center'> What we do </h1>
      </div>
      
       {/* Activities */}
      <div className=''>
      <h2 className='activities text-primary-maroon font-caudex text-2xl max-md:text-xl max-sm:text-lg'>Activities</h2>
      </div>
      
      <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true} // means to render carousel on server-side.
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={1000}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-20-px"
      className='font-palanquin'
      >
        <div className="aboutpagecards">
          <Link href='/weeklysatsangh'>
            <img className="w-full h-4/5 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="text-lg max-md:text-base max-sm:text-sm">Weekly Satsangh</div>
            </div>
          </Link>
          
        </div>
        <div className="aboutpagecards">
          <Link href='/housesatsangh'>
            <img className="w-full h-4/5 object-cover" src="/assets/images/pic2.jpeg" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="text-lg max-md:text-base max-sm:text-sm">House Satsangh</div>
            </div>
          </Link>
          
        </div>
        <div className="aboutpagecards">
          <Link href='/storytime'>
            <img className="w-full h-4/5 object-cover" src="/assets/images/pic3.jpeg" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="text-lg max-md:text-base max-sm:text-sm">Kadhai Kelu Kadhai Kelu</div>
            </div>
          </Link>
        </div>

        <div className="aboutpagecards">
          <Link href='/storytime'>
            <img className="w-full h-4/5 object-cover" src="/assets/images/pic3.jpeg" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="text-lg max-md:text-base max-sm:text-sm">Akhanda Nama</div>
            </div>
          </Link>
        </div>
      </Carousel>
        

      {/* Classes */}
        <div className='mt-10'>
        <h2 className='activities text-primary-maroon  font-caudex text-2xl max-md:text-xl max-sm:text-lg'>Classes</h2>
        </div>
        
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className='font-palanquin '
        > 
          <div className="aboutpagecards">
            <Link href='/classes'>
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic1.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="text-lg max-md:text-base max-sm:text-sm">Gopakuteeram</div>
              </div>
            </Link>
          </div>
          <div className="aboutpagecards">
            <Link href='/classes'>
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic2.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="text-lg max-md:text-base max-sm:text-sm">Itihasa/Purana Class</div>
              </div>
            </Link>
            
          </div>
          <div className="aboutpagecards">
            <Link href='/classes'>
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic3.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="text-lg max-md:text-base max-sm:text-sm">Yuva Gopakuteeram</div>
              </div>
            </Link>
            
          </div>
          <div className="aboutpagecards">
            <Link href='/classes'>
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic3.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="text-lg max-md:text-base max-sm:text-sm">Madhurageetham</div>
              </div>
            </Link>
            
          </div>
          <div className="aboutpagecards">
            <Link href='/classes'>
              <img className="w-full h-3/4 object-cover" src="/assets/images/pic3.jpeg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="text-lg max-md:text-base max-sm:text-sm">Sanskrit Class</div>
              </div>
            </Link>
          </div>
        </Carousel>
      
      {/* Events */}
      <div className='mt-10'>
      <h2 className='activities text-primary-maroon font-caudex text-2xl max-md:text-xl max-sm:text-lg'>Events</h2>
      </div>
      
      <div className="font-palanquin relative flex flex-row max-sm:flex-col justify-center max-sm:items-center gap-5">
        {lastThree.map((item,index) => (
          <div key={index} className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
            <Link href={`/events/${eventpics.length-index}`}>
              <img className="w-full h-3/4 object-cover max-lg:h-1/2 max-sm:h-3/4" src={item.imgURL} alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">{item.title}</div>
              </div>
            </Link>
            
        </div>
        ))
        }
      </div>

      <div className='ml-auto max-sm:max-container'>
        <Link href='/events'><Button label="Read More" type=""/></Link>
      </div>
      
    </section>
  )
}

export default WhatWeDo