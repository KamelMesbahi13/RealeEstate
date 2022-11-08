import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaSolarPanel, FaEnvira } from 'react-icons/fa';
import { GiTurban } from 'react-icons/gi';
import { RiBuildingLine } from 'react-icons/ri'


const NestingHouse = () => {
    return (
        <>
            <div className='bg-third-color pb-16 text-main-color'>
                <div className='container'>
                    <div className='pt-16'>
                        <h6 className='text-main-color tracking-wider'>NESTING HOUSE</h6>
                        <h1 className='text-4xl my-4 lg:text-5xl text-second-color'>Designed To Meet The <br /> Highest Criteria</h1>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 textCenter'>
                        <div>
                            <div>
                                <RiBuildingLine className='text-second-color text-3xl md:text-5xl  ' />
                            </div>
                            <div>
                                <h5 className='my-4'>PROJECT MANAGEMENT</h5>
                            </div>
                            <div>
                                <p className="text-lg">To beta test override the digital divide with additional click through from.</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <FaSolarPanel className='text-second-color text-3xl md:text-5xl ' />
                            </div>
                            <div>
                                <h5 className='my-4'>SOLAR PANELS</h5>
                            </div>
                            <div>
                                <p className="text-lg">To beta test override the digital divide with additional click through from.</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <FaEnvira className='text-second-color text-3xl md:text-5xl ' />
                            </div>
                            <div>
                                <h5 className='my-4'>NATURAL ENVIRONMENT</h5>
                            </div>
                            <div>
                                <p className="text-lg">DevOps nanotechnology immersion along the information highway will.</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <GiTurban className='text-second-color text-3xl md:text-5xl ' />
                            </div>
                            <div>
                                <h5 className='my-4'>URBAN PLANNING</h5>
                            </div>
                            <div>
                                <p className="text-lg">Close the loop on focusing solely on the bottom line capitalize on low hanging.</p>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NestingHouse