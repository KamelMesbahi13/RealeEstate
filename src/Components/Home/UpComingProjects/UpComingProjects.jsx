import React from 'react';
import './UpComingProjects.css';
import Swiper from './Swiper';

const UpComingProjects = () => {
    return (
        <>
            <div className='upComingBack' name='upComingBack'>
                <div className='container'>
                    <div>
                        <div className='pt-24'>
                            <h6 className='text-main-color tracking-wider'>UPCOMING PROJECT</h6>
                            <h1 className='text-4xl my-4 lg:text-5xl text-main-color'>Dream Living Space <br /> Setting New Standards</h1>
                        </div>
                        <div className='w-full shadow-xl md:h-[115vh] bg-main-color mt-12'>
                            <div className='p-8'>
                                <div className='textCenter'>
                                    <div className='mb-12'>
                                        <h6 className='text-third-color-color tracking-wider'>About Project</h6>
                                        <h1 className='text-4xl my-4 lg:text-5xl text-second-color'>Upcoming Projects</h1>
                                    </div>
                                </div>
                                    <Swiper />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpComingProjects