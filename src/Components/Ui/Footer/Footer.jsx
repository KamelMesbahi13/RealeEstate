import React from 'react';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { BsHouseDoor, BsTelephone } from 'react-icons/bs';
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai'

import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer-back relative text-main-color pb-16'>
                <div className="container">
                    <div className='pt-16'>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 md:gap-12'>
                            <div>
                                <div className='flex items-center mb-4'>
                                    <GoLocation className='text-second-color text-2xl hidden md:block md:text-4xl' />
                                    <h1 className='text-2xl md:text-4xl '>KML Residence</h1>
                                </div>
                                <div className='flex items-center'>
                                    <BsHouseDoor className='text-2xl md:text-3xl mr-4' />
                                    <h6>14755 Boumerdes, Boumerdes</h6>
                                </div>
                                <div className='flex items-center mt-8 mb-4'>
                                    <BsTelephone className='text-2xl mr-4 md:text-3xl' />
                                    <h6>0540 42 59 69</h6>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-3xl mb-4'>Explore</h2>
                                <div className='flex flex-col'>
                                    <a href="/" className='text-xl w-fit mb-4'> Home </a>
                                    <a className='text-xl w-fit mb-4' href='/services'>Services</a>
                                    <a className='text-xl w-fit mb-4' href='/apartments'>Apartments</a>
                                    <a className='text-xl w-fit mb-4' href='/about'>About</a>
                                    <a className='text-xl w-fit' href='/contactus'>Contact Us</a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2 className='text-xl'>Send Us A Message</h2>
                                    <input type="text" placeholder='Your Email' className='my-4 footer-back-trans focus:outline-none' />
                                </div>
                                <div>
                                    <button className='py-[0.9rem] px-8'>Send</button>
                                </div>
                                <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit officia excepturi molestiae eveniet consequatur.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer