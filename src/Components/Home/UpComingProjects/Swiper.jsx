import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './UpComingProjects.css';
import { Navigation } from "swiper";
import Data from "./UpComingProjects";


const ImageSwiper = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                Data.map(({id, image, project, projectType, building, number, total}) => {
                    return (
                        <SwiperSlide key={id}>
                            <div className="flex flex-col md:flex-row items-center cursor-grab">
                                <div className="swiper-slideUp">
                                    <img className="w-[100vh]" src={image} alt={project} />
                                </div>
                                <div className="md:ml-12 lg:ml-36 mt-4 md:mt-8 lg:mt-0" >
                                    <h6>1.Project Name: <span className="ml-2">{project}</span></h6>  
                                    <h6>2.Project Type: <span className="ml-2">{projectType}</span> </h6>
                                    <h6>3.Building Location: <span className="ml-2">{building}</span> </h6>
                                    <h6>4.No. Of Apartment: <span className="ml-2">{number}</span></h6>
                                    <h6>5.Total Investment: <span className="ml-2">{total}</span></h6>
                                    <div className="mt-8">
                                        <a href="/apartments"><button>View More</button></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </>
    );
}

export default ImageSwiper