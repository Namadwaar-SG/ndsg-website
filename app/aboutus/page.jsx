import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <main>
        <SectionHeader sectionLabel="About Us"/>
        <section className="px-48 max-md:px-12 mt-16 max-container">
            <p className='font-palanquin text-left text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>

                Namadwaar Singapore, founded in November 2012, is a cherished branch of the Global Organization for Divinity (GOD), standing as a testament to the transformative power of Nama Sankirtan guided by the blessings of HH Maharanyam Sri Sri Muralidhara Swamiji and the initiative of devotees from Chaitanya Mahaprabhu Nama Bhiksha Kendra. Rooted in the timeless wisdom of the Vedas, Namadwaar Singapore embraces the universal practice of chanting the Maha Mantra as a gateway to inner peace, prosperity, and universal brotherhood.
                <br/>
                <br/>
                Founded on the principle that Nama Kirtan is the quintessential path of devotion in the current age, Namadwaar Singapore relentlessly promotes the chanting of the divine names of God, particularly the Maha Mantra:
            </p>
            <blockquote className="mx-2 my-12 px-4 border-s-4 border-gray-300 bg-gray-100">
                <p className="text-xl text-center font-caudex font-medium leading-10 text-primary-blue max-sm:text-[10px] max-sm:leading-7">
                    Hare Rama Hare Rama Rama Rama Hare Hare
                    <br/>
                    Hare Krishna Hare Krishna Krishna Krishna Hare Hare
                </p>
            </blockquote>
            <p className='font-palanquin text-left text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                This sacred practice not only enriches one spiritually, but also addresses the contemporary challenges faced by humanity. The goal of this movement is to reach people in every corner of the world and make them realize the value in chanting the divine Name of God for happiness, 
                peace and prosperity.
            </p>
        </section>


        <div className='mt-12 max-container px-20 max-md:px-0'>
            <Image
                src="/assets/images/aboutusbanner.png"
                width={800}
                height={500}
                alt="Picture of the author"
                className='w-full'
            />
        </div>

        <section className="px-48 max-md:px-12 mt-16 max-container">
            <p className='font-palanquin text-left text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                
                In a world plagued by endless strife and material pursuits, Namadwaar Singapore strives to offer solace and spiritual elevation through regular community gatherings, outreach programs and community service initiatives. Echoing Sri Sri Muralidhara Swamiji's teachings, Namadwaar Singapore embodies the essence of Bhakti to Sri Krishna, making the profound benefits of Nama Kirtan accessible to all.
                <br/>
                <br/>
                Aligned with GOD organizations worldwide, Namadwaar Singapore epitomizes a global network dedicated to fostering universal peace, harmony, and the pursuit of spiritual fulfillment. Through its unwavering commitment to Nama Sankirtan, Namadwaar Singapore endeavors to inspire individuals to discover joy and serenity within themselves, contributing positively to the fabric of society at large.
            </p>
        </section>
        <h1 className='my-12 container max-container text-center font-caudex text-4xl max-sm:text-3xl font-bold text-primary-maroon'>
            Join us today.
        </h1>
    </main>
  )
}

export default AboutUs