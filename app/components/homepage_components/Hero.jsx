import React from 'react'

const Hero = () => {
  return (
    <section 
      id="home"
      className="flex flex-row h-auto gap-12 pb-24 max-lg:flex-col max-lg:items-center max-lg:gap-0 max-lg:text-center max-lg:pt-12">
      <div className='lg:pl-8 w-1/2 flex flex-col justify-center items-start max-lg:w-3/4' > 
        <h1 className='font-caudex font-bold text-5xl max-xl:text-4xl max-md:text-3xl max-lg:leading-10 max-sm:text-2xl'>Whatever philosophy you may follow, <span className='text-primary-maroon'>Stay true to it, and Chant Nama</span></h1>
        <p className='font-palanquin text-slate-grey mt-6 mb-15 text-base leading-8 max-sm:text-[12px] max-sm:leading-7'>
        The concept of Namadwaar is a worldwide initiative of our master to strive towards Universal Peace and Harmony by bringing about inner transformation within each individual through the simple path of chanting the Divine Names. 
        This is a way to provide material as well as spiritual upliftment to all of humanity.
        </p>
      </div>

{/* h-full centers the image vertically */}
      <div className='w-1/2 max-lg:w-3/4 flex items-center'>
        <img src="/assets/images/heroicon.png"
          alt="Logo"
          className='w-full object-contain'
        />
  
      </div>
    </section>
  )
}

export default Hero