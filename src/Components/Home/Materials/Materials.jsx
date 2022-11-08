import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import imgOne from '../../../assets/ImgNum10.jpg'

const Materials = () => {
    const [windowValue, setWindowValue] = useState(false);

    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
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
            <div className={windowValue ? 'Active mt-8 sm:m-0' : 'NoneActive'}>
                <div className='flex flex-col items-center sm:p-0 px-8 mx-auto sm:mb-0 sm:flex-row'>
                    <div className='sm:mx-28 sm:w-[60%] mb-8'>
                        <h6 className='text-third-color tracking-wider'>MATERIALS</h6>
                        <h1 className='text-4xl my-4 lg:text-5xl text-second-color'>Fine Touch Of Luxury</h1>
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
        </>
    )
}

export default Materials