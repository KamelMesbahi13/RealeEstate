import React from 'react';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';

const ContactForm = () => {
    return (
        <>
            <div className='mt-[35rem] sm:mt-80'>
                <div className="container">
                    <div className='w-[90%] lg:w-[80%] shadow-2xl h-[103vh] sm:h-[100vh] lg:h-[65vh] mx-auto'>
                        <div className='flex flex-col sm:flex-row items-center'>
                            <div className='sm:w-[60%] p-8'>
                                <h2 className='text-xl sm:text-2xl mb-8'>Send Us A Message</h2>
                                <div>
                                    <form action="#">
                                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                            <div>
                                                <label htmlFor="Name">Your Name</label> <br />
                                                <input className='mt-2 border-b-[1px] border-b-third-color focus:outline-none pl-1' type="text" />
                                            </div>

                                            <div>
                                                <label htmlFor="Email">E-mail</label> <br />
                                                <input className='mt-2 border-b-[1px] border-b-third-color focus:outline-none pl-1' type="email" />
                                            </div>

                                            <div>
                                                <label htmlFor="Phone">Phone</label> <br />
                                                <input className='mt-2 border-b-[1px] border-b-third-color focus:outline-none pl-1' type="tel" />
                                            </div>

                                            <div>
                                                <label htmlFor="Company">Company</label> <br />
                                                <input className='mt-2 border-b-[1px] border-b-third-color focus:outline-none pl-1' type="text" />
                                            </div>

                                            <div>
                                                <label htmlFor="Message">Message</label> <br />
                                                <input type='text' className='mt-4 border-b-[1px] border-b-third-color focus:outline-none pl-1' />
                                                <button className='px-8 mt-2'>Send</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='bg-third-color w-full sm:w-[45%] sm:h-[100vh] lg:h-[65vh] text-main-color'>
                                <div className='p-8'>
                                    <h2 className='text-xl sm:text-2xl mb-8'>Contact Information</h2>
                                    <div className='mt-0 md:mt-16'>
                                        <div className='flex items-center'>
                                            <p><GoLocation className='mr-4 text-2xl' /></p>
                                            <h5 className='text-base md:text-xl'> 10478 Boumerdes, Boumerdes</h5>
                                        </div>

                                        <div className='flex items-center my-8'>
                                            <p><BsPhone className='mr-4 text-2xl' /></p>
                                            <h5 className='text-base md:text-xl'>0540/42/59/69</h5>
                                        </div>

                                        <div className='flex items-center'>
                                            <p><GoMail className='mr-4 text-2xl' /></p>
                                            <h5 className='text-base md:text-xl'>info@gmail.com</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm