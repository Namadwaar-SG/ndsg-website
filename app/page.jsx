import React from "react";
import WhoWeAre from "./components/homepage_components/WhoWeAre";
import WhatWeDo from "./components/homepage_components/WhatWeDo";
import UpcomingEvents from "./components/homepage_components/UpcomingEvents";
import Hero from "./components/homepage_components/Hero";
import { upcomingeventdetails } from "@constants/fixed";

//localhost:3000/
const HomePage = () => {
  return (
    <main>
      {/* Upcoming Event Notification */}
      {/* <div className='py-4 px-8 flex gap-4 justify-center items-center bg-primary-maroon'>
        <p className='font-caudex text-white text-center text-lg max-md:text-sm'>Join us for Gokulashtami 2024 celebrations, at Namadwaar! </p>
        <Link href={`/events/upcomingevents/gokulashtami`}><Button label="More Details" type=""/></Link>
      </div> */}

      <section className="padding lg:bg-background-pastel bg-cover bg-beige">
        <Hero />
      </section>
      <section className="padding padding-y">
        <WhoWeAre />
      </section>
      <section className="padding padding-y">
        <WhatWeDo />
      </section>
      {upcomingeventdetails.length > 0 && (
        <section className="padding padding-y bg-beige">
          <UpcomingEvents />
        </section>
      )}
    </main>
  );
};

export default HomePage;
