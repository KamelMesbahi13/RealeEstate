import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Visit = () => {
    return (
        <>
            <div className='bg-third-color w-full h-[30vh] mt-12 relative'>
                    <div className='absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-16'>
                        <h1 className='text-2xl md:text-5xl my-4 lg:text-6xl text-second-color'>Schedule a visit</h1>
                        <a href='/contactus'><h2 className='flex items-center py-2 ml-12 md:ml-0 text-main-color text-2xl md:text-4xl cursor-pointer'>Contact Us<AiOutlineArrowRight className='ml-2' /></h2></a>
                    </div>
            </div>
        </>
    )
}

export default Visit