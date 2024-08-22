import SectionHeader from '@app/components/common_components/SectionHeader'
import React from 'react'
import Image from 'next/image'
const StoryTime = () => {
  return (
    <main>
        <SectionHeader sectionLabel="Kadhai Kelu Kadhai Kelu"/>
        <section
            className="mt-12 max-sm:mt-8 flex flex-row max-lg:flex-col gap-24 max-lg:gap-8 max-lg:items-center"
            >
            <div className="w-1/2 max-lg:w-full" >
                <Image src="/assets/images/pic2.jpeg"
                    alt="Logo"
                    height={300}
                    width={800}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-1/2 max-lg:w-full max-lg:padding-x justify-center flex flex-col items-center pr-8 max-lg:pr-0'>
                <p className='font-palanquin text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                <strong>Kadhai Kelu Kadhai Kelu</strong> is a series of discourse by Brahmasri Ravi Teja ji on portions of Srimad Bhagavatam. 
                <i> "Kadhai"</i> in Tamil translates to <i>story</i>, and <i>"Kelu"</i> translates to <i>listen</i>. This series encompasses the beauty of listening  to
                the stories of Bhagavan and immersing yourself in his thoughts.
                </p>
                <br />
                <p className='font-palanquin text-black text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                Set in the backdrop of Parikshit as he absorbs wisdom from Saint Shuka in the purest and most earnest ways, we too get to enjoy the stories of Srimad Bhagavatam through this series.
                </p>
                
            </div>

        </section>

        <section className='px-56 padding-y max-lg:p-12 text-center bg-beige mt-12'>
            <h1 className='font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon'>The significance of listening.</h1>
            <div className='font-palanquin text-black text-lg max-sm:text-base max-sm:leading-7 leading-8 mt-6'>
                <p className='mt-6 text-balance'>
                Sri Swamiji says, the <span className='underlined decoration-solid'>easiest way to attain bhakti and subsequently liberation</span> is by listening to these stories. Earnest listening to stories of bhagavan is hailed as most profound. 
                <br/>
                <br/>
                Great sadhus and saints of pure Sattva quality (devoid of jealousy, ego and anger) yearn to listen to such stories, for it purifies the heart. King Parikshit is celebrated for his utmost focus, reverence and dedication with which he listened and savored the divine Srimad Bhagavatam. <span className='underlined decoration-solid'>Through this alone he was able to attain the Lord</span>, showing the significance of simply listening.
                <br />
                <br />
                Hearing stories merely enhances our intellect, but truly listening to Srimad Bhagavatham and allowing it to touch our hearts is called <span className='underlined decoration-wavy font-bold'>Shravanam.</span> This is truly an egoless state. A state that facilitates inner transformation, one that leads us to the almighty.
                </p>
            </div>
        </section>

        <div className='max-container padding-y px-10'>
            <section className='flex flex-row max-sm:flex-col gap-10'>
                <div className='flex flex-col gap-10'>
                    <div className=''>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Schedule
                        </h1>
                        <p className='font-palanquin text-left text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                            Every Saturday. From 6:00pm to 7:00pm (SGT)
                        </p>
                    </div>

                    <div className=''>
                        <h1 className='font-caudex text-3xl max-sm:text-lg font-bold text-primary-maroon'>
                            Location
                        </h1>
                        <p className='font-palanquin text-left text-lg max-sm:text-base max-sm:leading-7 leading-8'>
                        Namadwaar Singapore
                        448 Serangoon Road, #02 – 01
                        (Opp. Sri Srinivasa Temple)
                        </p>
                    </div>
                    
                </div>
                
                <div className='w-1/2 max-sm:w-full'>
                    <Image src="/assets/images/phamplet.png"
                        alt="Logo"
                        height={300}
                        width={800}
                        className='w-full h-full object-cover'
                    />
                </div>
            </section>

        </div>
        
    </main>
  )
}

export default StoryTime