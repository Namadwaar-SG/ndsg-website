import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'

const Classes = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Classes"/>
        <section>
          <div className='max-container padding-y px-36 max-sm:p-8'>
              <p className='font-inter text-center text-black text-base max-sm:text-[10px] max-sm:leading-7 leading-8 mt-6 mr-14 max-sm:m-0'>
              Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo.</p>          </div>
        </section>

        <section>
            <div className='h-[600px] max-md:h-[400px] bg-hero bg-center bg-cover lg:bg-fixed relative'>
             <div className='flex justify-center items-start flex-col w-1/2 h-full whitespace-normal bg-dark-red bg-opacity-75 max-md:w-full'>
                <h1 className='font-caudex text-beige text-4xl max-md:text-3xl max-md:leading-8 max-sm:text-2xl font-bold padding-y px-14 '>What you'll learn:</h1>
                <ul className='font-inter text-beige text-xl max-md:text-lg max-sm:text-sm max-md:leading-8 px-16 list-disc'>
                    <li className='mb-5'>Small slokas on Ganesha, Hanuman,
                        Muruga, Krishna, Rama, Shiva, Lakshmi,
                        Saraswathi, Hayagriva, Guru
                    </li>
                    <li className='mb-5'>Achuthashtakam, Madhurashtakam,
                        Guruashtakam
                    </li>
                    <li className='mb-5'>Achuthashtakam, Madhurashtakam,
                        Guruashtakam
                    </li>
                    <li className='mb-5'>Achuthashtakam, Madhurashtakam,
                        Guruashtakam
                    </li>
                
                </ul>
             </div>
            </div>
        </section>
       
        <section className='mt-32'>
            <div className='h-[600px] max-md:h-[400px] bg-second-hero bg-center bg-cover lg:bg-fixed relative'>
             <div className='flex justify-center items-start flex-col w-1/2 h-full whitespace-normal bg-primary-blue bg-opacity-75 max-md:w-full absolute right-0 inset-y-0'>
                <h1 className='font-caudex text-beige text-4xl max-md:text-3xl max-md:leading-8 max-sm:text-2xl font-bold padding-y px-14 '>Students will gain:</h1>
                <ul className='font-inter text-beige text-xl max-md:text-lg max-sm:text-sm max-md:leading-8 px-16 list-disc'>
                    <li className='mb-5'>Small slokas on Ganesha, Hanuman,
                        Muruga, Krishna, Rama, Shiva, Lakshmi,
                        Saraswathi, Hayagriva, Guru
                    </li>
                    <li className='mb-5'>Achuthashtakam, Madhurashtakam,
                        Guruashtakam
                    </li>
                    <li className='mb-5'>Achuthashtakam, Madhurashtakam,
                        Guruashtakam
                    </li>
                    <li className='mb-5'>Achuthashtakam, Madhurashtakam,
                        Guruashtakam
                    </li>
                
                </ul>
             </div>
            </div>
        </section>

        <section className='mt-20 max-container'>
            <div className='flex gap-8 justify-center'>
                <div className='group overflow-hidden relative w-1/3 h-[400px] shadow-2xl cursor-pointer'>
                    <img className='h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000' src="/assets/images/mg2.jpeg"
                    />  
                    <div className='absolute inset-0 rounded-t-3xl bg-gradient-to-b from-transparent via-transparent via-70% to-primary-maroon to-90% '>
                        <div className='absolute inset-x-0 bottom-0 p-6'>
                            <h1 className='font-caudex font-bold text-white text-center text-xl'>Gopakuteeram</h1>
                        </div>
                    </div>

                </div>
                <div className='group overflow-hidden relative w-1/3 h-[400px] shadow-2xl cursor-pointer'>
                    <img className='h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000' src="/assets/images/mg2.jpeg"
                    />  
                    <div className='absolute inset-0 rounded-t-3xl bg-gradient-to-b from-transparent via-transparent via-70% to-primary-maroon to-90% '>
                        <div className='absolute inset-x-0 bottom-0 p-6'>
                            <h1 className='font-caudex font-bold text-white text-center text-xl'>Yuva Gopakuteeram</h1>
                        </div>
                    </div>

                </div>

            </div>

        </section>
        <section className='mt-20 max-container'>
        <h1 className='text-center font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold'>Itihasa and Purana Classes</h1>
            <div className='mt-16 grid px-16 grid-cols-1 lg:grid-cols-3 gap-12'>
                <div className='flex flex-col items-start gap-8'>
                    <h1 className='text-left font-inter text-xl max-sm:text-sm font-bold'>Srimad bhagavatam</h1>
                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <div>Every Sunday</div>
                    </div>
                    
                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>4:30pm - 6:30pm</div>
                    </div>

                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>Serangoon 414, 689590</div>
                    </div>
                </div>
                {/* Ramayana */}
                <div className='flex flex-col gap-8'>
                    <h1 className='font-inter text-xl max-sm:text-sm font-bold'>Ramayana</h1>
                    
                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>
                    <div>Every Sunday</div>
                    </div>
                    
                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                    <div>4:30pm - 6:30pm</div>
                    </div>

                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
                    <div>Serangoon 414, 689590</div>
                    </div>
                </div>
                {/* Sanskrit Class */}
                <div className='flex flex-col gap-8'>
                    <h1 className='text-left font-inter text-xl max-sm:text-sm font-bold'>Sanskrit</h1>
                    
                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>
                    <div>Every Sunday</div>
                    </div>
                    
                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                    <div>4:30pm - 6:30pm</div>
                    </div>

                    <div className='flex flex-row gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
                    <div>Serangoon 414, 689590</div>
                    </div>
                </div>
            </div>
        </section>

        <section className='my-32 px-16 text-center'>
            <h1 className='font-caudex text-4xl max-sm:text-3xl font-bold'>
                Join for classes!
            </h1>
            <p className='mt-5 font-inter text-black text-base max-sm:leading-7 leading-8'>
            You may reach out to Ravi Teja ji @ +65 9187 6416 for enquiries.
            </p>
        </section>
    </main>
  )
}

export default Classes