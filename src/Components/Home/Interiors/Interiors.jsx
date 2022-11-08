import React, { useState, useEffect } from 'react';
import imgOne from '../../../assets/ImgNum4.jpg';
import { BsArrowRight } from 'react-icons/bs';


const Interiors = () => {

    const [windowValue, setWindowValue] = useState(false);
    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 950) {
            setWindowValue(true)
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
            <div>
                <div className={windowValue ? 'Active mt-8 sm:m-0' : 'NoneActive'}>
                    <div className='flex flex-col items-center px-8 mx-auto sm:flex-row-reverse sm:p-0'>
                        <div className='sm:mx-28 sm:w-[60%] mb-8 sm:mb-0'>
                            <h6 className='text-third-color tracking-wider'>INTERIORS</h6>
                            <h1 className='text-4xl my-4 lg:text-5xl text-second-color'>Superior Style</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque, ratione eaque, assumenda corporis rem nihil similique aspernatur exercitationem voluptate iure nesciunt error officiis. Quia recusandae asperiores et aspernatur dolorum?</p>
                            <div className='flex mt-4 items-center'>
                                <a href="/apartments"><p className='cursor-pointer text-third-color'>View More</p></a>
                                <BsArrowRight className='text-third-color text-[1.2rem] ml-1' />

                            </div>
                        </div>
                        <div>
                            <img className='h-[100vh] w-[45rem]' src={imgOne} alt="description img one" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interiors