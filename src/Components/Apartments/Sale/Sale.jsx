import React from 'react'

const Sale = ({ sales, error }) => {
    return (
        <>
            <div>
                <div className="container">
                    <div className='text-center mt-28 mb-16'>
                        <h5 className='text-second-color text-xl'>Sale Choices</h5>
                        <h1 className='text-5xl sm:text-6xl mb-4'>Our Apartment </h1>
                        <div className='text-center mt-40'>
                            <h1 className='text-5xl md:text-6xl'>{error}</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            sales.map((sale, i) => {
                                return (
                                    <div key={i}>
                                        <div>
                                            <div className='bg-white rounded-sm'>
                                                <img className='w-full h-[40vh]' src={sale.image_url} alt={sale.agent_name} />
                                                <div className='p-4'>
                                                    <h6 className='uppercase mb-2'>SALE</h6>
                                                    <div className='flex items-center justify-between'>
                                                        <h2 className='capitalize text-xl'>{sale.agent_address}</h2>
                                                        <h2>{sale.price},000$</h2>
                                                    </div>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <h2>Num Of Bathroom:  {sale.num_bathrooms}</h2>
                                                        <h2>Num Of Bedrooms:  {sale.num_bedrooms}</h2>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <h2>{sale.country}</h2>
                                                        <h2>{sale.street_name}</h2>
                                                    </div>
                                                    <div className='flex items-center justify-between mt-2'>
                                                        <h2>Phone Num: {sale.agent_phone}</h2>
                                                        <button className='py-2 px-10 bg-[transparent] border text-black mt-4 border-black hover:text-white'><a className='text-xl' href={sale.details_url}>More</a></button>
                                                    </div>
                                                </div>
                                            </div>
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

export default Sale