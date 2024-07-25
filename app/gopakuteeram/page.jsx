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
        Our Gopa Kuteeram is a children’s life enrichment program that is conducted under the guidance of our master  HH Sri Sri Muralidhara Swamiji.  Our swamiji says: 
        </p>

        <blockquote className="mx-8 my-12 px-4 border-s-4 border-gray-300 bg-gray-100">
            <p className="text-xl font-caudex font-medium leading-10 text-primary-blue max-sm:text-[12px] max-sm:leading-7">
            righteous virtues , seeds of bhakthi and moral values must be sown in the young minds as they tend to grap them very quickly and retain them forever.
            </p>
        </blockquote>
        <p className='font-palanquin text-left text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
        Hence, this Gopa kuteeram is our initiative to impart cultural, traditional and moral values to the children of age between 3- 15 through a structured syllabus , laced with devotion in a fun filled interactive environment
        </p>
      </section>
      <section className='mt-20 max-sm:mt-8'>
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
        <section className='mt-20 max-sm:mt-8'>
            <div className='flex flex-row max-md:flex-col-reverse '>
                <div className='bg-white w-1/2 px-44 max-lg:p-12 max-md:w-full flex flex-col justify-center items-center text-center font-palanquin text-lg'>
                        <p className=''>
                        Every year GK annual day is celebrated where our kids performs skits, dance etc duly trained by our GK teachers and parent volunteers
                        </p>
                        <p className='font-bold mt-8'>
                        Enrol your children in our GK classes today.
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
            <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-center mb-16 text-primary-maroon'>Schedule</h1>
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-2 gap-y-20 justify-items-center font-palanquin'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-caudex'>Tanah Mera Kecil Road</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots</div>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Lakshmi Prakash @ +65 9111 1685</div>
                    </div> 
                    <hr class="mt-6 w-full h-px bg-gray-300 border-0 rounded"/>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-caudex'>Tanah Mera Kecil Road</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots</div>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Lakshmi Prakash @ +65 9111 1685</div>
                    </div> 
                    <hr class="mt-6 w-full h-px bg-gray-300 border-0 rounded"/>
                </div>


                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-caudex'>Tanah Mera Kecil Road</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots</div>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Lakshmi Prakash @ +65 9111 1685</div>
                    </div> 
                    <hr class="mt-6 w-full h-px bg-gray-300 border-0 rounded"/>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-caudex'>Tanah Mera Kecil Road</h1>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div>Slots</div>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                        <li>Monday 5:30 - 6:30pm</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>Mrs. Lakshmi Prakash @ +65 9111 1685</div>
                    </div> 
                    <hr class="mt-6 w-full h-px bg-gray-300 border-0 rounded"/>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default Gopakuteeram
