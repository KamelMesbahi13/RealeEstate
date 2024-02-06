import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import { Autoplay } from "swiper";
import Data from "./HeaderData";
import { Link } from "react-scroll";

export default function App() {
  return (
    <>
      <Swiper
        name="header"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Data.map(({ img, alt, id, caption }) => {
          return (
            <SwiperSlide key={id} className="relative">
              <img
                className="h-[50vh] md:h-[100vh] w-full"
                src={img}
                alt={alt}
              />
              <div className="absolute top-1/3 sm:top-1/2 px-12">
                <div className="container">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-main-color">
                    {caption}
                  </h1>
                  <Link
                    smooth={true}
                    offset={80}
                    duration={900}
                    to="upComingBack"
                  >
                    <button
                      type="button"
                      className="mt-4 text-sm p-0 bg-second-color py-3 px-3 md:py-3 md:px-3"
                    >
                      DISCOVER MORE
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
