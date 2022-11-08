import React from 'react';
import imgNumOne from '../../../assets/ContactUsTalk.jpg';
import imgNumTwo from '../../../assets/ContactUsSupport.jpg';

const Boxes = () => {
    return (
        <>
            <div className='absolute top-[100%] w-full'>
                <div className="container">
                    <div className='flex flex-col sm:flex-row justify-evenly textCenter'>
                        <div className='bg-white mb-4 sm:mb-0 sm:w-[40%]'>
                            <img className='h-[20vh] rounded-[50%] p-4' src={imgNumOne} alt="imgNumOne" />
                            <div className='p-2'>
                                <h2 className='text-xl sm:text-2xl mt-2'>Talk To A Member Of Our Team</h2>
                                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste quam sed reprehenderit molestias dolorum?</p>
                            </div>
                            <div className='pb-4'>
                                <button>Learn More</button>
                            </div>
                        </div>
                        <div className='bg-white sm:w-[40%]'>
                            <img className='h-[20vh] rounded-[50%]' src={imgNumTwo} alt="imgNumTwo" />
                            <div className='p-2'>
                                <h2 className='text-xl sm:text-2xl mt-2'>Apartments And Account Support</h2>
                                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste quam sed reprehenderit molestias dolorum?</p>
                            </div>
                            <div className='pb-4'>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boxes