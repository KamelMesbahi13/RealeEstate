import React, { useState, useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './Experience.css'


const Experience = () => {

    const [progressBar, setProgressBar] = useState(false);

    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 1560 ) {
            setProgressBar(true)
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', activeClass)
        return (
            window.removeEventListener('scroll', activeClass)
        )
    }, [])

    return (
        <>
            <div className= 'mt-16'>
                <div className="container">
                    <div className='flex flex-col md:flex-row'>
                        <div className='md:w-1/2'>
                            <h5 className='relative mb-2 w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[30%] before:bg-second-color before:h-[2px]'>Our Company's Value</h5>
                            <h1 className='text-5xl sm:text-6xl mb-4'>Kamel's Residence</h1>
                            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit error repudiandae excepturi cumque eum! Rem asperiores in sit. Sint id nam quisquam quaerat, possimus minus eos facere sit quis voluptatum culpa similique quas adipisci consequatur magni! Facere unde, deserunt optio, nostrum, perspiciatis explicabo recusandae nulla modi sequi qui illum necessitatibus!</p>
                            <div>
                                <div className='flex items-center'>
                                    <AiOutlineCheck className='mr-2 text-5xl text-third-color' />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt dolores quaerat possimus nesciunt! Ex sed voluptatum dolores similique incidunt?</p>
                                </div>

                                <div>
                                    <div className='flex items-center my-4'>
                                        <AiOutlineCheck className='mr-2 text-5xl text-third-color' />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt dolores quaerat possimus nesciunt! Ex sed voluptatum dolores similique incidunt?</p>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex items-center'>
                                        <AiOutlineCheck className='mr-2 text-5xl text-third-color' />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt dolores quaerat possimus nesciunt! Ex sed voluptatum dolores similique incidunt?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <a href="/services"><button>See More</button></a>
                            </div>
                        </div>
                        <div>
                            <div className='experience-back mt-8 w-[80%] md:w-[40%] md:ml-8 h-[90vh] text-main-color'>
                                <div className='relative container'>
                                    <h2 className='text-2xl sm:text-3xl text-center mt-8'>Let's See Our Experience</h2>
                                    <div className='mt-16'>
                                        <div>
                                            <span className='md:text-2xl'>Design</span>
                                            <div className='w-full bg-main-color h-4 rounded-sm relative'>
                                                <div className={progressBar ? 'absolute w-[89%] bg-second-color h-4 transition-all duration-[2000ms]' : 'noneActiveBar'}></div>
                                            </div>
                                        </div>

                                        <div className='my-8'>
                                            <span className='md:text-2xl'>Trust</span>
                                            <div className='w-full bg-main-color h-4 rounded-sm relative'>
                                                <div className={progressBar ? 'absolute w-[76%] bg-second-color h-4 transition-all duration-[2000ms]' : 'noneActiveBar'}></div>
                                            </div>
                                        </div>

                                        <div className='my-8'>
                                            <span className='md:text-2xl'>Experience</span>
                                            <div className='w-full bg-main-color h-4 rounded-sm relative'>
                                                <div className={progressBar ? 'absolute w-[91%] bg-second-color h-4 transition-all duration-[2000ms]' : 'noneActiveBar'}></div>
                                            </div>
                                        </div>

                                        <div>
                                            <span className='md:text-2xl'>Places</span>
                                            <div className='w-full bg-main-color h-4 rounded-sm relative'>
                                                <div className={progressBar ? 'absolute w-[84%] bg-second-color h-4 transition-all duration-[2000ms]' : 'noneActiveBar'}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience