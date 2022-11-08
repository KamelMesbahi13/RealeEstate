import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiStarSLine } from 'react-icons/ri';
import Data from '../Data';

export default function App() {
    return (
        <>
        <div className="flex flex-col-reverse md:flex-row-reverse items-center">
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">

                {
                    Data.map(({id, img, description, name, job}) => {
                        return (
                            <div>
                                <SwiperSlide key={id}>
                                    <div>
                                        <div className="bg-white-color textCenter shadow-xl cursor-grab">
                                            <div className="mr-4">
                                                <img className="h-[40vh] w-full" src={img} alt={description} />
                                                <div className="">
                                                    <p className="my-4 text-sm">{description}</p>
                                                    <div className="text-left">
                                                        <div className="flex items-center">
                                                            <h4 className="text-2xl mr-16">{name}</h4>
                                                            <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                            <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                            <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                            <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                            <RiStarSLine className="text-[#E6B325] text-2xl" />
                                                        </div>
                                                        <h5>{job}</h5>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>
            <div className="md:w-[40%] mb-20 mt-44 md:mr-4">
                <h1 className="text-3xl sm:text-4xl">See What People Are Saying About Us</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ea? Voluptates natus pariatur amet saepe qui nesciunt quas iste consequuntur?</p>
            </div>
        </div>
        </>
    );
}
