import React, { useState, useEffect } from 'react';
import img from '../../../assets/ImgNum11.jpg'

const Inter = () => {

    const [content, setContent] = useState(false);

    const activeClassContent = window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setContent(true)
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', activeClassContent)
        return () => {
            window.removeEventListener('scroll', activeClassContent)
        }
    }, [])

    return (
        <>
            <div className={content ? 'Active mt-16' : 'NoneActive'}>
                <div className="container">
                    <div className='flex flex-col justify-between items-center sm:flex-row'>
                        <div>
                            <img src={img} className='w-full h-[100vh]' alt='Team Image' />
                        </div>
                        <div className='sm:w-[60%] mt-12 sm:mt-0 sm:ml-16'>
                            <h5 className='relative mb-4 text-xl w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[40%] before:bg-second-color before:h-[2px]'>Real Estate</h5>
                            <h1 className='text-5xl sm:text-6xl mb-4'>Luxury Apartment Only In Our Agency</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam optio aperiam autem, voluptatibus sed amet eaque dignissimos, aliquid dolorum rem temporibus corporis, ipsa quas vitae tempore distinctio? Sequi aut, possimus consequuntur quasi minus magni assumenda distinctio autem itaque voluptas odit sint placeat reiciendis aspernatur ad velit eius obcaecati? Error voluptatibus recusandae, officia animi ex corporis facere provident iure velit dicta dolores incidunt quam commodi a aperiam dolore quis odit ducimus quas nihil modi temporibus culpa?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inter