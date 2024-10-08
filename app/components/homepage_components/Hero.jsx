import React from 'react'
import Button from '../aboutus_components/Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
     
      <section 
        id="home"
        className="flex flex-row h-auto gap-12 pb-24 max-lg:flex-col max-lg:items-center max-lg:gap-0 max-lg:text-center max-lg:pt-12">
        <div className='lg:pl-8 w-1/2 flex flex-col justify-center items-start max-lg:w-3/4' > 
          <h1 className='font-caudex font-bold text-5xl max-xl:text-4xl max-md:text-3xl max-lg:leading-10 max-sm:text-2xl'>Whatever philosophy you may follow, <span className='text-primary-maroon'>Stay true to it, and Chant Nama</span></h1>
          <p className='font-palanquin text-balance text-slate-grey mt-6 mb-15 text-base leading-8 max-sm:leading-7'>
          The concept of Namadwaar is a worldwide initiative to strive towards Universal Peace and Harmony by bringing about inner transformation within each individual through the simple path of chanting the Divine Names. 
          This bestows one with success in wordly pursuits and progress in spiritual sadhana.
          </p>
        </div>

  {/* h-full centers the image vertically */}
        <div className='w-1/2 max-lg:w-3/4 flex items-center'>
          <img src="/assets/images/heroicon.png"
            alt="Logo"
            className='w-full object-contain transition-transform hover:scale-105 ease-in duration-500 delay-150'
          />
    
        </div>
      </section>
    </div>
    
  )
}

export default Hero