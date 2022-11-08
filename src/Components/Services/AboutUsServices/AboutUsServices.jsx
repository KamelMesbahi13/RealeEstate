import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Img from '../../../assets/ImgNum6.jpg';

const AboutUsServices = () => {

    const [progress, setProgress] = useState(false);

    const activeClass = window.addEventListener('scroll', () => {
        if (window.scrollY > 1340) {
            setProgress(true)
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', activeClass);
        return (
        window.removeEventListener('scroll', activeClass)
        )
    }, [])

    return (
        <>
            <div className={ progress ? 'Active mt-16' : 'NoneActive' }>
                <div className="container">
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center'>
                        <div className='w-full sm:w-[60%] mr-8'>
                            <h5 className='relative mb-4 text-xl w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[20%] before:bg-second-color before:h-[2px]'>About Kamel's Residence</h5>
                            <h1 className='text-5xl sm:text-6xl mb-4'>The Leading Real Estate In The Market</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam optio aperiam autem, voluptatibus sed amet eaque dignissimos, aliquid dolorum rem temporibus corporis, ipsa quas vitae tempore distinctio? Sequi aut, possimus consequuntur quasi minus magni assumenda distinctio autem itaque voluptas odit sint placeat reiciendis aspernatur ad velit eius obcaecati? Error voluptatibus recusandae, officia animi ex corporis facere provident iure velit dicta dolores incidunt quam commodi a aperiam dolore quis odit ducimus quas nihil modi temporibus culpa?</p>
                            <a href="/about"><button className='mt-4'>About Us</button></a>
                        </div>

                        <div>
                            <img className='h-[100vh]' src={Img} alt="Img Num 6" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsServices