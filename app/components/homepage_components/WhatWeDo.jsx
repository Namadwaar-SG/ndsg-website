"use client";
import React, { useState, useEffect } from "react";
import Button from "@app/components/aboutus_components/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { eventpics } from "@constants/fixed";
import Link from "next/link";
import BlurredImageFill from "./BlurredImageFill";

const WhatWeDo = () => {
  const recentThree = eventpics.slice(0, 3);
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/get-latest-event")
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);

    fetch("/api/get-latest-post")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1070 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1070, min: 600 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="w-full flex flex-col justify-start gap-8">
      <div>
        <h1 className="font-caudex text-primary-maroon  text-4xl max-md:text-3xl max-md:leading-8 font-bold max-lg:text-center">
          {" "}
          What we do{" "}
        </h1>
      </div>

      {/* Activities */}
      <div className="">
        <h2 className="activities text-primary-maroon font-caudex text-2xl max-md:text-xl max-sm:text-lg">
          Activities
        </h2>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="font-palanquin"
      >
        <div className="aboutpagecards">
          <div className="aboutpagecards">
            <Link href="/realityretreat">
              <div className="absolute top-2 right-2 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                New!!
              </div>
              <BlurredImageFill
                className="w-full h-4/5 object-cover"
                src="/assets/images/reality-retreat.jpeg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-lg">Reality Retreat</div>
              </div>
            </Link>
          </div>
          <Link href="/weeklysatsang">
            <img
              className="w-full h-4/5 object-cover"
              src="/assets/images/satsang.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-lg">Weekly Satsang</div>
            </div>
          </Link>
        </div>
        <div className="aboutpagecards">
          <Link href="/housesatsang">
            <img
              className="w-full h-4/5 object-cover"
              src="/assets/images/house4.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-lg">House Satsang</div>
            </div>
          </Link>
        </div>
        <div className="aboutpagecards">
          <Link href="/storytime">
            <img
              className="w-full h-4/5 object-cover"
              src="/assets/images/pic3.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-lg">Kadhai Kelu Kadhai Kelu</div>
            </div>
          </Link>
        </div>

        <div className="aboutpagecards">
          <Link href="/akhandanama">
            <img
              className="w-full h-4/5 object-cover"
              src="/assets/images/pc6.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-lg">Akhanda Nama</div>
            </div>
          </Link>
        </div>
      </Carousel>

      {/* Classes */}
      <div className="mt-10">
        <h2 className="activities text-primary-maroon  font-caudex text-2xl max-md:text-xl max-sm:text-lg">
          Classes
        </h2>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="font-palanquin "
      >
        <div className="aboutpagecards">
          <Link href="/gopakuteeram">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/gk.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-lg">Gopakuteeram</div>
            </div>
          </Link>
        </div>
        <div className="aboutpagecards">
          <Link href="/classes">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/pic3.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-lg">Itihasa/Purana Class</div>
            </div>
          </Link>
        </div>
        <div className="aboutpagecards">
          <Link href="/yuvagk">
            <img
              className="w-full h-3/4 object-cover"
              src="/assets/images/yuva.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="text-lg">Yuva Gopakuteeram</div>
            </div>
          </Link>
        </div>
      </Carousel>

      {/* Events */}
      <div className="mt-10">
        <h2 className="activities text-primary-maroon font-caudex text-2xl max-md:text-xl max-sm:text-lg">
          Events
        </h2>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="font-palanquin "
      >
        {events.map((item, index) => (
          <div key={index} className="aboutpagecards">
            <Link href={`/events/${item.id}`}>
              <BlurredImageFill
                src={item.image_links[0]}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-lg">{item.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>

      <div className="ml-auto max-sm:max-container">
        <Link href="/events">
          <Button label="Read More" type="" />
        </Link>
      </div>

      {/* Posts */}
      <div>
        <h2 className="activities text-primary-maroon font-caudex text-2xl max-md:text-xl max-sm:text-lg">
          Posts
        </h2>
      </div>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="font-palanquin "
      >
        {posts.map((item, index) => (
          <div key={index} className="aboutpagecards">
            <Link href={`/posts/${item.id}`}>
              <BlurredImageFill
                src={item.image_links[0]}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="text-lg">{item.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>

      <div className="ml-auto max-sm:max-container">
        <Link href="/posts">
          <Button label="Read More" type="" />
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDo;
