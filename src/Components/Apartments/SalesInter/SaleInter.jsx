import React from 'react';
import './SaleInter.css';
import Data from './SaleInterData';

const SaleInter = () => {

    return (
        <>
            <div className='Sale-inter-back text-main-color mt-12 pb-12'>
                <div className="container relative">
                    <div className='pt-12'>
                        <h5 className='relative w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[30%] before:bg-second-color before:h-[2px]'>Trust Is Every Thing</h5>
                        <h1 className='text-5xl sm:text-6xl'>Realtors you Can Trust</h1>
                        <p className='sm:w-[40%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae totam, laboriosam dignissimos magni aperiam?</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly mt-8 sm:mt-16'>
                        {
                            Data.map(({alt, img, description, heading, id}) => {
                                return (
                                    <div key={id} className='sm:w-[95%] mt-8 sm:mt-0 textCenter bg-main-color text-black rounded-md shadow-xl mb-8 py-12'>
                                        <img className='mt-4' src={img} alt={alt} />
                                        <div className='p-4'>
                                            <h3 className='text-xl my-4'>{heading}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaleInter