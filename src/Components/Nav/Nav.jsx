import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai'


const Nav = () => {

    const [nav, setNav] = useState(true)

    const navHandle = () => {
        setNav(!nav)
    }

    return (
        <>
        <div className={ nav ? 'py-2 w-full absolute z-50 ' : 'bg-[#c4c4c4] w-full h-[100vh] z-50 absolute' }>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <GoLocation className='text-second-color text-2xl hidden md:block' />
                        <h6 className='hidden md:block text-3xl text-main-color'>KML'S Residence</h6>
                    </div>
                    <div className='hidden md:ml-16 md:flex text-main-color'>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/services'>Services</Link>
                        <Link className='nav-link' to='/apartments'>Apartments</Link>
                        <Link className='nav-link' to='/about'>About</Link>
                        <Link to='/contactus' className='nav-link'>Contact Us</Link>
                    </div>
                    <div className='hidden md:flex justify-center text-main-color'>
                        <a href="https://web.facebook.com/kamel.136.km" target='__blanc'><AiFillFacebook className='text-xl mr-2 hover:text-[#3b5998]' /></a>
                        <a href="https://www.instagram.com/__kml1.3/ target='__blanc'"><AiOutlineInstagram className='text-xl mr-2 hover:text-[#cd486b]' /></a>
                        <a href="https://twitter.com/kamel_mesbahi" target='__blanc'><AiFillTwitterSquare className='text-xl hover:transition-all hover:text-[#1DA1F2]' /></a>
                    </div>
                    <div>
                        <div>
                            <div className='text-xl md:hidden cursor-pointer'>
                                { nav ? <AiOutlineMenu className='text-main-color text-2xl' onClick={navHandle} /> : <AiOutlineClose onClick={navHandle}  /> }
                            </div>
                            <div>
                                <div className={ nav ? 'hidden absolute' : 'md:hidden flex flex-col absolute right-1/2 translate-x-1/2 text-center'}>
                                    <div className='flex flex-col items-center mb-4'>
                                        <h6 className='text-2xl'>KML Residence</h6>
                                        <GoLocation className='text-second-color text-2xl block'/>
                                    </div>
                                    <Link className='md:mr-4 mb-4 text-xl' to='/' onClick={navHandle}>Home</Link>
                                    <Link className='md:mr-4 mb-4 text-xl' to='/services' onClick={navHandle}>Services</Link>
                                    <Link className='md:mr-4 mb-4 text-xl' to='/apartments' onClick={navHandle}>Apartments</Link>
                                    <Link className='md:mr-4 mb-4 text-xl' to='/about' onClick={navHandle}>About</Link>
                                    <Link to='/contactus' className='text-xl' onClick={navHandle}>Contact Us</Link>
                                    <div className='flex justify-center my-4'>
                                        <a href="https://web.facebook.com/kamel.136.km" target='__blanc'><AiFillFacebook className='text-xl mr-2 duration-200 hover:text-[#3b5998]' /></a>
                                        <a href="https://www.instagram.com/__kml1.3/" target='__blanc'><AiOutlineInstagram className='text-xl mr-2 duration-200 hover:text-[#cd486b]' /></a>
                                        <a href="https://twitter.com/kamel_mesbahi" target='__blanc'><AiFillTwitterSquare className='text-xl hover:text-[#1DA1F2]' /></a>
                                    </div>
                                    <div>
                                        <p className='text-third-color text-xl'>Phone / <span className='text-black'>0540/42/59/69</span></p>
                                        <p className='text-third-color text-xl'>Address / <span className='text-black'>10478 Boumerdes, Boumerdes.</span></p>
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

export default Nav