import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div name='header' className='header-back text-main-color'>
                <div className="container">
                    <div className='absolute top-1/3'>
                        <h5 className='relative mb-2 text-xl w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[30%] before:bg-second-color before:h-[2px]'>Let's Get In Touch</h5>
                        <h1 className='text-5xl sm:text-6xl'>Contact Us Right Now !!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header