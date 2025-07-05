import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { upcomingeventdetails } from "@constants/fixed";
import Link from "next/link";
import Button from "@app/components/aboutus_components/Button";

const CarouselCards = () => {
  const recent = upcomingeventdetails;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1070, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="font-palanquin"
      >
        {recent.map((item, i) => (
          <div className="bg-white rounded shadow-lg overflow-hidden h-[500px] mx-5 mb-10">
            <img
              className="shadow-lg w-full h-3/5 max-lg:h-1/2 max-sm:h-3/5 object-cover object-top"
              src={item.imgURL[0]}
              alt="Sunset in the mountains"
            />
            <div className="h-2/5 max-lg:h-1/2 max-sm:h-2/5">
              <div className="px-6 pt-4 leading-8">
                <h1 className="text-lg font-bold">{item.title}</h1>
                <div className="mt-3 leading-7">
                  Time: {item.time} <br /> Date: {item.date}{" "}
                </div>
              </div>
              <div className="p-5">
                <Link href={`/events/upcomingevents/${i}`}>
                  <Button label="Click to Join" type="" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCards;
