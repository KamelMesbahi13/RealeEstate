import React from 'react';
import Data from './OurTeamData';

const OurTeam = () => {
    return (
        <>
            <div className='mt-[19rem] md:mt-16'>
                <div className="container">
                    <div>
                        <h6 className='text-third-color tracking-wider'>OUR TEAM</h6>
                        <h1 className='text-4xl my-4 lg:text-5xl text-second-color'>Meet Our Perfect Team</h1>
                    </div>
                    <div className='grid place-items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 '>
                        {
                            Data.map(({id, image, name, job}) => {
                                return (
                                    <div key={id} className="mt-4">
                                        <img src={image} alt={name} className="sm:h-[50vh]" />
                                        <div className='text-center my-2'>
                                            <h2 className='text-2xl text-second-color'>{name}</h2>
                                            <h6 className='text-sm'>{job}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam