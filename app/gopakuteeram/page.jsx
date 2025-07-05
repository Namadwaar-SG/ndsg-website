import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'

const Gopakuteeram = () => {
  return (
    <main className='bg-beige'>
      <SectionHeader sectionLabel="Gopa Kuteeram"/>
      <section className='mt-20 px-48 py-12 max-md:px-20 max-sm:px-12 max-container bg-white'>
        <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
        The term <b>‘Gopa Kuteeram’</b> in Sanskrit refers to the play-house of young Lord Krishna and the Gopas, his playmates of Vrindavan. Hence, <b>‘Gopa Kuteeram’</b> signifies a place where children have enormous fun along with and in the presence of the Lord.
        <br/>
        <br/>
        Our Gopa Kuteeram is a children’s life enrichment program that is conducted under the guidance of our master  HH Sri Sri Muralidhara Swamiji.
        It is an initiative to impart cultural, traditional and moral values to the children of age between 3- 15 through a structured syllabus, laced with devotion in a fun filled interactive environment
        </p>
      </section>
      <section className='mt-20 max-sm:mt-8'>
            <div className='h-auto bg-hero bg-center bg-cover lg:bg-fixed relative'>
             <div className='py-36 max-md:py-16 flex flex-col gap-8 justify-center items-start px-16 w-1/2 h-full whitespace-normal bg-dark-red bg-opacity-75 max-lg:w-full'>
                <h1 className='font-caudex text-beige text-4xl max-md:text-3xl max-md:leading-8 max-sm:text-2xl font-bold'>What you'll learn:</h1>
                <ul className='pl-6 flex flex-col gap-6 font-palanquin text-beige text-xl max-md:text-lg max-md:leading-8 max-sm:text-sm list-disc'>
                    <li>Slokas on various deities, and for different occasions
                    </li>
                    <li>Exciting stories from the scriptures 
                    </li>
                    <li>Madhurageetham and Namavalis
                    </li>
                    <li>Skits and drama to reenact stories</li>
                    <li>Dance and music as a way to express spirituality and religion</li>
                
                </ul>
             </div>
            </div>
        </section>
        <section className='mt-20 max-sm:mt-8'>
            <div className='flex flex-row max-md:flex-col-reverse '>
                <div className='bg-white w-1/2 px-44 max-lg:p-12 max-md:w-full flex flex-col justify-center items-center text-center font-palanquin text-lg'>
                        <p className=''>
                        Every year, the Gopa Kuteeram Annual Day is celebrated where our kids perform skits, dance and music, duly trained by our dedicated teachers and parent volunteers
                        </p>
                        <p className='font-bold mt-8 text-balance'>
                        Enrol your children in our Gopa Kuteeram classes today.
                        </p>
                </div>
                <div className='w-1/2 max-md:w-full'>
                
                    <Image src="/assets/images/gk.jpg"
                        alt="Logo"
                        height={300}
                        width={800}
                        className='w-full h-full object-cover'
                    />

                </div>                
            </div>
        </section>

        <section className='bg-white mt-20 max-sm:mt-8 py-12 px-16'>
            <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-left mb-16 text-primary-maroon'>Schedule</h1>
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-2 gap-y-20 justify-items-start font-palanquin'>
                <div className='flex flex-col gap-4 border-b border-gray-300'>
                    <h1 className='text-2xl font-caudex'>Tanah Merah (online available)</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots</div>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>Monday 3:00 - 4:00pm</li>
                        <li>Monday 4:30 - 5:30pm</li>
                        <li>Wednesday 4:30 - 5:30pm</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Lakshmi Prakash @ +65 9111 1685</div>
                    </div> 
                    <br />
                </div>

                <div className='flex flex-col gap-4 border-b border-gray-300'>
                    <h1 className='text-2xl font-caudex'>Tampines St 33</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots opening soon! Contact us to join. </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Uma Raghu @ +65 8332 5293</div>
                    </div> 
                    <br />
                </div>

                <div className='flex flex-col gap-4 border-b border-gray-300'>
                    <h1 className='text-2xl font-caudex'>Tampines Ave 7 (online available)</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots</div>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>Wednesday 5:45 - 6:45pm</li>
                        <li>Thursday 6:00 - 7:00pm (online)</li>
                    </ul>
                    <ul className='list-disc list-inside'>
                        Sloka Classes (online):
                        <li>Thursday 12:30 - 1:30pm (for ladies)</li>
                        <li>Friday 8:30 - 9:30pm (age 12+) </li>
                        <li>Sunday 8:30 - 9:30pm (age 12+)</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Bhanu Sridhar @ +65 8260 4847</div>
                    </div> 
                    <br />
                </div>

                <div className='flex flex-col gap-4 border-b border-gray-300'>
                    <h1 className='text-2xl font-caudex'>Online</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots</div>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>Sunday 10:00 - 11:00am (ages 8+)</li>
                        <li>Sunday 11:30 - 12:30pm (ages 4-8)</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Janani Ganesan @ +65 8732 9849</div>
                    </div> 
                    <br />
                </div>

                
                
            </div>
        </section>
    </main>
  )
}

export default Gopakuteeram
