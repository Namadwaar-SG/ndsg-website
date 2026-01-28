import SectionHeader from "@app/components/common_components/SectionHeader";
import React from "react";
import Image from "next/image";
const StoryTime = () => {
  return (
    <main>
      <SectionHeader sectionLabel="Community Service" />
      <section className="mt-12 max-sm:mt-8 flex flex-row max-lg:flex-col gap-24 max-lg:gap-8 max-lg:items-center">
        <div className="w-1/2 max-lg:w-full flex items-center justify-center ml-8">
          <Image
            src="/assets/images/nkf_volunteer.jpg"
            alt="Logo"
            height={200}
            width={1600}
          />
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
      <br />
    </main>
  );
};

export default StoryTime;
