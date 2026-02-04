import SectionHeader from "@app/components/common_components/SectionHeader";
import React from "react";
import Image from "next/image";
import Carousel from "@app/components/common_components/Carousel";
import { thaipusam2026Pics } from "@constants/fixed";

const Community_Service = () => {
  return (
    <main>
      <SectionHeader sectionLabel="Community Service" />
      <section className="mt-12 max-sm:mt-8 flex flex-row max-lg:flex-col gap-24 max-lg:gap-8 max-lg:items-center">
        <div className="w-1/2 max-lg:w-full flex items-center justify-center ml-8">
          <div className="relative w-full ">
            <Image
              src="/assets/images/volunteering_nkf_2.png"
              alt="Volunteer 2"
              width={1600}
              height={750}
            />
            <Image
              src="/assets/images/nkf_volunteer.jpg"
              alt="Volunteer 1"
              width={1600}
              height={750}
            />
          </div>
        </div>

        <div className="w-1/2 max-lg:w-full max-lg:padding-x justify-center flex flex-col items-center pr-8 max-lg:pr-0">
          <h1 className="font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon">
            Community Volunteering Activities of Namadwaar Singapore Family
          </h1>
          <br />
          <p className="font-palanquin text-black text-base leading-[2.1rem] max-sm:leading-8">
            Inspired by the grace of Maharanyam Sri Sri Muralidhara Swamiji and
            the blessings of Sri Madhurisaki Sametha Sri Premikavaradha Swami,
            Namadwaar Singapore regularly volunteers with The National Kidney
            Foundation (NKF). As Singapore's largest dialysis provider, the NKF
            serves over 6,000 patients, many of whom are from needy backgrounds
            and receive care at little to no cost.
            <br /> <br />
            On 6 December 2025, four volunteers from Namadwaar Singapore
            contributed to a fundraising event to support these needy patients.
            Subsequently, on 24 January 2026, five volunteers participated in a
            befriending initiative, providing vital social support to patients
            during their challenging dialysis sessions.
            <br /> <br />
            These experiences have been profoundly educational, fostering
            empathy, deepening the volunteers' understanding of kidney failure,
            and instilling a powerful sense of gratitude. Notably, this
            commitment to service is shared across generations, with both adult
            and youth members actively involved.
            <br /> <br />
            With the grace of Sri Guruji, may Namadwaar Singapore's volunteering
            continue to make a meaningful difference in the community.
          </p>
        </div>
      </section>
      <section className="mt-12 max-sm:mt-8 flex flex-row max-lg:flex-col gap-24 max-lg:gap-8 max-lg:items-center bg-beige">
        <div className="w-1/2 max-lg:w-full flex items-center justify-center ml-8">
          <div className="relative w-full ">
            <Carousel autoSlide={true} autoSlideInterval={4000} height={1000}>
              {thaipusam2026Pics.map((item) => (
                <Image
                  src={item.imgURL}
                  key={item.label}
                  fill
                  className="object-cover h-full w-full"
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full max-lg:padding-x justify-center flex flex-col items-center pr-8 max-lg:pr-0">
          <br />
          <h2 className="font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon">
            Thaipusam 2026
          </h2>
          <br />
          <p className="font-palanquin text-black text-base leading-[2.1rem] max-sm:leading-8">
            Thaipusam is a significant Hindu festival celebrated worldwide.
            Thaipusam symbolizes the triumph of good over evil and signifies
            spiritual transformation. In Singapore, the festival is celebrated
            with great enthusiasm and devotion by many communities, with
            devotees coming together to participate peacefully, following
            guidelines.
            <br /> <br />
            The annual Thaipusam festival here is jointly organized by Sri
            Srinivasa Perumal Temple, Sri Thendayuthapani Temple, and the Hindu
            Endowment Board. Numerous volunteering organizations and individuals
            are involved with these organizers to render services for
            participating devotees during the festival. Given the scale of the
            event, it is widely acknowledged that volunteer contributions are
            essential for safety, logistics, and maintaining the sanctity of the
            rituals. For more than a decade, Singapore Namadwaar members have
            been actively volunteering during the Thaipusam event and are ever
            grateful for this opportunity to play a part in helping organizers
            manage the event in various measures.
            <br /> <br />
            This year (2026), the festival began at around 11.20 pm on Jan 31,
            when devotees started carrying ‘Paalkudams’ and set off on a 3.2- 4
            km procession route from the Sri Srinivasa Perumal temple in
            Serangoon Road towards the Sri Thendayuthapani temple in Tank Road.
            In subsequent batches, devotees set out to carry ‘alagu kavadis’ and
            pull chariots in a procession along the route. The festival ended at
            about 11.30 pm on Feb 1. It is estimated that about 19000 devotees
            have participated actively this year.
            <br /> <br />
            Members from Singapore Namadwaar served as volunteers this year,
            covering various time slots and positions. We attended briefings
            held prior to the start of the event, played the roles of ‘Route
            Marshals’ and were stationed along the route to offer support and
            manage the flow of devotees along the way. At ‘Music points’ where
            traditional music instruments were played, we helped to manage the
            procession safely. We also helped cheer on devotees and cleaned up
            the walking paths from leftover towels, cans, and trinkets. We are
            thankful for the volunteering opportunity this year as well and are
            rewarded with a sense of satisfaction, cultural pride, and enhanced
            team spirit. May the blessings of our Sri Guruji and Sri Madhuri
            Sakhi Sametha Sri Premika Varadan Swami continue to shower upon us
            to engage in more such service-oriented activities.
          </p>
          <br /> <br />
        </div>
      </section>
    </main>
  );
};

export default Community_Service;
