import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "@node_modules/next/image";

const BootstrapCarousel = ({ selectedPost }) => {
  return (
    <div>
      <Carousel>
        {(selectedPost?.image_links || []).map((item, i) => (
          <Carousel.Item interval={4000} key={i}>
            <Image
              src={item}
              alt={selectedPost.title}
              key={i}
              width={800}
              height={200}
              className="d-block w-100"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;
