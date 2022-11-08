import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Up = () => {

    const [up, setUp] = useState(false);


    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 2050) {
            setUp(true)
        } else {
            setUp(false)
        }
    })

    useEffect(() => {
        window.addEventListener("scroll", activeClass)
        return (
            window.removeEventListener("scroll", activeClass)
        )
    },[])

    return (
        <>
        <div className={up ? 'fixed bottom-20 w-full z-50 Active' : 'NoneActive'}>
            <div className="container">
                <div className='bg-third-color w-12 h-12 float-right relative cursor-pointer rounded-sm transition-all hover:bg-[#1e5128e0]'>
                    <Link smooth={true} offset={0} duration={900} to='header'><AiOutlineArrowUp className='text-main-color text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Up