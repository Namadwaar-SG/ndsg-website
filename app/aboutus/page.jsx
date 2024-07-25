import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <main>
        <SectionHeader sectionLabel="About Us"/>
        <section className="px-48 max-sm:px-12 mt-16 max-container">
            <p className='font-palanquin text-left text-black text-base max-sm:text-[12px] max-sm:leading-7 leading-8'>

                Namadwaar Singapore is a registered Hindu society inspired by HH Sri Sri Muralidhara Swamiji established since Nov 8, 2012. The concept of Namadwaar is a worldwide initiative of our master to strive towards Universal Peace and Harmony through inner transformation by the simple path of chanting the Divine Names.
                <br/>
                <br/>
                Based on the rock-solid foundation of the Vedas, the goal of this movement is to reach the people in every corner of the world and make them realize the value in chanting the divine Name of God for happiness, 
                peace and prosperity.
                <br/>
                <br/>
                Being eternal and apt for all ages, our Sanathana Dharma prescribes a path for the modern day man — the path of Bhakti to Sri Krishna– through the easy path of Nama Kirtan. All our scriptures strongly proclaim that in this Age of Kali, Nama Kirtan is the only way to attain God.</p>
        </section>

        <section className="px-48 max-sm:px-8 mt-12 max-container">
            <blockquote className="mx-8 my-12 px-4 border-s-4 border-gray-300 bg-gray-100">
                <p className="text-xl text-center font-caudex font-medium leading-10 text-primary-blue max-sm:text-[10px] max-sm:leading-7">
                    Hare Rama Hare Rama Rama Rama Hare Hare
                    <br/>
                    Hare Krishna Hare Krishna Krishna Krishna Hare Hare
                </p>
            </blockquote>
        </section>

        <div className='mt-12 max-container'>
            <Image
                src="/assets/images/guruji-quote.jpeg"
                width={800}
                height={500}
                alt="Picture of the author"
                className='w-full'
            />
        </div>

        <section className="px-48 max-sm:px-12 mt-16 mb-20 max-container">
            <p className='font-palanquin text-left text-black text-base max-sm:text-[12px] max-sm:leading-7 leading-8'>

                Namadwaar Singapore is a registered Hindu society inspired by HH Sri Sri Muralidhara Swamiji established since Nov 8, 2012. The concept of Namadwaar is a worldwide initiative of our master to strive towards Universal Peace and Harmony through inner transformation by the simple path of chanting the Divine Names.
                <br/>
                <br/>
                Based on the rock-solid foundation of the Vedas, the goal of this movement is to reach the people in every corner of the world and make them realize the value in chanting the divine Name of God for happiness, 
                peace and prosperity.
                <br/>
                <br/>
                Being eternal and apt for all ages, our Sanathana Dharma prescribes a path for the modern day man — the path of Bhakti to Sri Krishna– through the easy path of Nama Kirtan. All our scriptures strongly proclaim that in this Age of Kali, Nama Kirtan is the only way to attain God.</p>
        </section>
    </main>
  )
}

export default AboutUs