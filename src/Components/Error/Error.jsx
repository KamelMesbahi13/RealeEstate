import React from 'react';
import './Error.css';
import Img from '../../assets/error.png'

const Error = () => {
    return (
        <>
            <div className='error'>
                <div className="container">
                    <div className='absolute top-1/2 -translate-y-1/2'>
                        <h1 className='text-5xl md:6xl'>Hmm..</h1>
                        <h2 className='text-4xl md:5xl my-4'>Something Went Wrong</h2>
                        <p>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home <br />
                        Check that you typed the address correctly, go back to your previous page..
                        </p>
                        <a href="/"><button className='p-0 mt-4'>Go Back To Home</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error