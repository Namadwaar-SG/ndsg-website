'use client'
import SectionHeader from '@app/components/common_components/SectionHeader'
import React, { useState } from 'react'
import ItihasaClassCard from '@app/components/common_components/ItihasaClassCard'
import Image from 'next/image'

const Classes = () => {

  const itihasaList = [
    {
        title: "Srimad Bhagavatham",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et scelerisque enim, non faucibus lectus. Ut sit amet egestas erat. Nulla rhoncus sem magna, eu porttitor purus tempus eget. Quisque fringilla tempus nunc sit amet condimentum.",
        day:"Every Sunday",
        time:"4:30pm - 6:30pm",
        location:"Serangoon 414, 689590"
    },
    {
        title: "Ramayana",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et scelerisque enim, non faucibus lectus. Ut sit amet egestas erat. Nulla rhoncus sem magna, eu porttitor purus tempus eget. Quisque fringilla tempus nunc sit amet condimentum.",
        day:"Every Sunday",
        time:"4:30pm - 6:30pm",
        location:"Serangoon 414, 689590"
    },
    {
        title: "Sanskrit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et scelerisque enim, non faucibus lectus. Ut sit amet egestas erat. Nulla rhoncus sem magna, eu porttitor purus tempus eget. Quisque fringilla tempus nunc sit amet condimentum.",
        day:"Every Sunday",
        time:"4:30pm - 6:30pm",
        location:"Serangoon 414, 689590"
    }

  ]

  return (
    <main>
        <SectionHeader sectionLabel="Classes"/>
        <section>
          <div className='max-container padding-y px-36 max-sm:p-8'>
              <p className='font-palanquin text-black text-lg leading-8 max-sm:text-[12px] max-sm:leading-7'>
              Suspendisse mattis fringilla lorem, ut pharetra est luctus eget. Nulla in porttitor arcu. Vestibulum enim eros, consectetur ut ultrices ac, convallis vitae augue. Nulla fringilla urna et viverra congue. Aliquam cursus, massa quis interdum pellentesque, ligula turpis vehicula nisl, non egestas odio sapien eget nisl. Nullam ac dapibus nulla. Maecenas in felis enim. Morbi velit turpis, luctus a dui eget, cursus feugiat ipsum. Aenean a porta leo.</p>          </div>
        </section>

        <section>
            <div className='h-[600px] max-md:h-[400px] bg-hero bg-center bg-cover lg:bg-fixed relative'>
             <div className='flex justify-center items-start flex-col w-1/2 h-full whitespace-normal bg-dark-red bg-opacity-75 max-md:w-full'>
                <h1 className='font-caudex text-beige text-4xl max-md:text-3xl max-md:leading-8 max-sm:text-2xl font-bold padding-y px-14 '>What you'll learn:</h1>
                <ul className='font-palanquin text-beige text-xl max-md:text-lg max-md:leading-8 max-sm:text-sm px-16 list-disc'>
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

        <section className='mt-20 max-container py-10'>
            <div className='flex justify-evenly max-sm:items-center max-sm:flex-col px-5 gap-4'>
                <div className='group overflow-hidden relative w-1/3 h-[400px] max-md:h-[300px] max-sm:w-5/6  shadow-2xl cursor-pointer'>
                    <img className='h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000' src="/assets/images/mg2.jpeg"
                    />  
                    <div className='absolute inset-0 rounded-t-3xl bg-gradient-to-b from-transparent via-transparent via-70% to-primary-maroon to-90% '>
                        <div className='absolute inset-x-0 bottom-0 p-6'>
                            <h1 className='font-caudex font-bold text-white text-center text-xl'>Gopakuteeram</h1>
                        </div>
                    </div>

                </div>
                <div className='group overflow-hidden relative w-1/3 h-[400px] max-md:h-[300px] max-sm:w-5/6  shadow-2xl cursor-pointer'>
                    <img className='h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000' src="/assets/images/mg.jpeg"
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
            <h1 className='text-center font-caudex font-bold text-4xl max-lg:text-left  max-md:text-2xl max-md:leading-8 px-16 text-primary-maroon'>Itihasa and Purana Classes</h1>
            <div className='mt-16 grid px-16 grid-cols-1 md:grid-cols-3 gap-12'>
                    {itihasaList.map((item) => (
                        <ItihasaClassCard title={item.title} description={item.description} day={item.day} time={item.time} location={item.location}/>
                    ))}
                    
            </div>
        </section>

        <section className='my-32 px-16 text-center'>
            <h1 className='font-caudex text-4xl max-sm:text-3xl font-bold text-primary-maroon'>
                Join for classes!
            </h1>
            <p className='mt-5 font-inter text-black text-base max-sm:leading-7 leading-8'>
            You may reach out to Ravi Teja ji @ +65 1234 4567 for enquiries.
            </p>
        </section>
    </main>
  )
}

export default Classes