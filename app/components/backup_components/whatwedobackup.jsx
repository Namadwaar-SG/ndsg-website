import React from "react";
import Button from "@app/components/aboutus_components/Button";
import { eventpics } from "@constants/fixed";
import Link from "next/link";

const WhatWeDo = () => {
  const lastThree = eventpics.slice(-3).reverse();
  return (
    <section className="w-full flex flex-col justify-start gap-5 max-container px-12">
      <div>
        <h1 className="font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold">
          {" "}
          What we do{" "}
        </h1>
      </div>

      {/* Activities */}
      <div>
        <h2 className="activities font-caudex text-2xl max-md:text-xl max-sm:text-lg">
          Activities
        </h2>
      </div>

      <div className="relative flex flex-row max-sm:flex-col justify-center max-sm:items-center gap-5">
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <Link href="/weeklysatsang">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/pic1.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
                Weekly Satsang
              </div>
            </div>
          </Link>
        </div>
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <Link href="/housesatsang">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/pic2.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
                House Satsang
              </div>
            </div>
          </Link>
        </div>
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <Link href="/storytime">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/pic3.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
                Kadhai Kelu Kadhai Kelu
              </div>
            </div>
          </Link>
        </div>

        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <Link href="/storytime">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/pic3.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
                Akhanda Nama
              </div>
            </div>
          </Link>
        </div>

        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <Link href="/community_service">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/volunteering_nkf_2.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
                Community Service
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Events */}
      <div className="mt-16 max-sm:mt-8">
        <h2 className="activities font-caudex text-2xl max-md:text-xl max-sm:text-lg">
          Events
        </h2>
      </div>

      <div className="relative flex flex-row max-sm:flex-col justify-center max-sm:items-center gap-5">
        {lastThree.map((item, index) => (
          <div
            key={index}
            className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4"
          >
            <Link href={`/events/${eventpics.length - index}`}>
              <img
                className="w-full h-3/4 object-cover max-lg:h-1/2 max-sm:h-3/4"
                src={item.imgURL}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
                  {item.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="ml-auto max-sm:max-container">
        <Link href="/events">
          <Button label="Read More" />
        </Link>
      </div>

      {/* Classes */}
      <div className="mt-16 max-sm:mt-8">
        <h2 className="activities font-caudex text-2xl max-md:text-xl max-sm:text-lg">
          Classes
        </h2>
      </div>

      <div className="relative flex flex-row max-sm:flex-col justify-center max-sm:items-center gap-5">
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <img
            className="w-full h-3/4 object-cover"
            src="/assets/images/pic1.jpeg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
              Gopakuteeram
            </div>
          </div>
        </div>
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <img
            className="w-full h-3/4 object-cover"
            src="/assets/images/pic2.jpeg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
              Itihasa/Purana Class
            </div>
          </div>
        </div>
        <div className="w-1/3 rounded overflow-hidden shadow-lg max-sm:w-3/4">
          <img
            className="w-full h-3/4 object-cover"
            src="/assets/images/pic3.jpeg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-Inter text-lg max-md:text-base max-sm:text-sm">
              Yuva Gopakuteeram
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
