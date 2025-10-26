"use client";
import Carousel from "@app/components/common_components/Carousel";
import SectionHeader from "@app/components/common_components/SectionHeader";
import React from "react";
import { carouselpics, realityRetreatPics } from "@constants/fixed";
import Image from "next/image";

const HouseSatsang = () => {
  return (
    <main>
      <SectionHeader sectionLabel="Reality Retreat" />

      <section className="mt-5 flex justify-center bg-beige">
        <div className="w-1/2 max-md:w-full">
          <Carousel autoSlide={false} autoSlideInterval={4000}>
            {realityRetreatPics.map((item) => (
              <Image
                src={item.imgURL}
                key={item.label}
                alt={item.label}
                width={500}
                height={500}
                className="object-contain h-full w-full"
                style={{ objectFit: "contain" }}
              />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="px-48 max-md:px-12 padding-y flex flex-col justify-center items-center gap-12">
        <p className="text-balance font-palanquin text-center font-bold text-primary-maroon text-lg max-sm:text-base max-sm:leading-7 leading-8 ">
          Reality Retreat - <em>Because your mind deserves a break too!</em>
        </p>
        <p className="text-balance font-palanquin text-center text-black text-lg max-sm:text-base max-sm:leading-7 leading-8 ">
          We invite you to Reality retreat sessions{" "}
          <span className="underlined decoration-solid">
            to help quieten the mind and release the weight you’ve been
            carrying.
          </span>{" "}
          Through mindful movement, breath techniques, and chanting the sacred
          mahamantra, rediscover the peace that has always lived within you.
        </p>
        <p className="text-balance font-palanquin text-center text-black text-lg max-sm:text-base max-sm:leading-7 leading-8">
          Please contact us via email at{" "}
          <a
            href="mailto:realityretreatsg@gmail.com"
            className="text-blue-600 hover:underline"
          >
            realityretreatsg@gmail.com
          </a>{" "}
          or via phone at{" "}
          <a href="tel:+6591832207" className="text-blue-600 hover:underline">
            +65 9183 2207
          </a>{" "}
          /{" "}
          <a href="tel:+6591458270" className="text-blue-600 hover:underline">
            +65 9145 8270
          </a>{" "}
          to sign up for sessions. Thank you!
        </p>
      </section>
    </main>
  );
};

export default HouseSatsang;
