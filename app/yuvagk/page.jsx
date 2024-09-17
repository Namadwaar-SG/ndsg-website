import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'
import Button from '@app/components/aboutus_components/Button'

const YuvaGK = () => {

  const yuvaSessions = [
    {
        date: "12th March",
        time: "4:00pm - 5:00pm",
        topic: "Topic: Hindu Heritage & Temple Architecture",
        speaker: "by Balaji ji"
    },
    {
        date: "12th March",
        time: "4:00pm - 5:00pm",
        topic: "Topic: Hindu Heritage & Temple Architecture",
        speaker: "by Balaji ji"
    },
    {
        date: "12th March",
        time: "4:00pm - 5:00pm",
        topic: "Topic: Hindu Heritage & Temple Architecture",
        speaker: "by Balaji ji"
    }
  ]  
  return (
    <main>
      <SectionHeader sectionLabel="Yuva Gopakuteeram"/>
      <section className="px-48 max-md:px-12 mt-16 max-container">
            <p className='font-palanquin text-center text-balance text-black text-lg max-sm:text-[12px] max-sm:leading-7 leading-8'>
            <strong>Yuva Gopakuteeram</strong> has been launched recently to provide the youth a platform to discuss <span className='underlined decoration-solid'> modern science, coupled with ancient wisdom</span>. Sessions are led by industry-experienced professionals who are also well-versed in the applications of wisdom from Sanatana Dharma in various aspects of today's world. This will give youth an opportunity to have meaningful discussions about technology and 
            <span className='underlined decoration-solid'> finding a middle ground between modern advancements and traditional values </span>, fostering a holistic understanding that integrates the best of both worlds. 
            </p>
        </section>
        <section className='mt-12 flex flex-row max-md:flex-col justify-center items-center gap-12 p-8'>
                    <Image src="/assets/images/yuvagk.png"
                                    alt="Logo"
                                    height={100}
                                    width={600}
                    />
                     <Image src="/assets/images/yuvagk2.png"
                        alt="Logo"
                        height={100}
                        width={600}
                    />
        </section>
        {/* {yuvaSessions.length > 0 && (
        <section className='bg-white mt-12 max-sm:mt-8 py-12 px-16'>
            <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-center mb-16 text-primary-maroon'>Upcoming Sessions</h1>
            <div className='flex flex-col gap-12'>
                {yuvaSessions.map((item) => (
                    <div key={item.date} className='px-20 flex flex-col max-md:px-0'>
                        <div className='flex max-md:flex-col justify-between gap-4 font-palanquin'>
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-2xl font-caudex'>{item.date} | {item.time} </h1>
                                <p className='font-semibold'>{item.topic}</p>
                                <p>{item.speaker}</p>
                            </div>
                            <div>
                                <Button label="RSVP" type="rsvp"/>
                            </div>
                        </div>
                        <hr class="mt-6 w-full h-px bg-gray-300 border-0 rounded"/>
                    </div>
                ))}
            </div>
        </section>
        )} */}
    </main>
  )
}

export default YuvaGK
