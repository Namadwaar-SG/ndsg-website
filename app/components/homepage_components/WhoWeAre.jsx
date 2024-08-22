import React from 'react'

const WhoWeAre = () => {
  return (
    <section
      className="flex flex-row justify-center gap-12"
    >
      <div className="hidden lg:block w-2/5" >
        <img src="/assets/images/whoweare.jpg"
            alt="Logo"
            className='w-full h-full object-cover'
          />
      </div>
      <div className='flex flex-col items-start justify-start w-3/5 max-lg:w-full max-lg:items-center'>
        <h1 className='font-caudex text-primary-maroon text-4xl max-md:text-3xl max-md:leading-8 font-bold'> Who we are </h1>
          <p className='font-palanquin max-lg:text-center text-slate-grey text-md max-sm:text-[12px] max-sm:leading-7 leading-8 mt-6 mb-15 pr-14 max-lg:pl-14'>
          Namadwaar Singapore is a registered Hindu society inspired by HH Sri Sri Muralidhara Swamiji established since Nov 8 2012 to help promote Universal Love for the betterment of human race without any social , cultural or geographical barriers. 
          <br/>
          <br/>
          Constant chanting of the Mahamantra in the same location manifests divine presence in that place and spreads positive vibrations of love, harmony and mental peace. This sacred practice not only enriches one spiritually, but also addresses the contemporary challenges faced by humanity. Through its unwavering commitment to Nama Sankirtan, Namadwaar establishments all around the world endeavor to inspire individuals to discover joy and serenity within themselves.
          </p>
      </div>

    </section>
  )
}

export default WhoWeAre