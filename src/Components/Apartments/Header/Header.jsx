import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div name='header' className='apartment-back relative text-main-color'>
                <div className="container">
                    <div className='absolute top-1/2'>
                        <h5 className='relative w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[40%] before:bg-second-color before:h-[2px]'>APARTMENTS</h5>
                        <h1 className='text-5xl sm:text-6xl'>Check Our Apartments</h1>
                    </div>
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header