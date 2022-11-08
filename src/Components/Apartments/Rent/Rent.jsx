import React, { useEffect, useState } from 'react';
import Loader from '../../Ui/Loading/Loader';
import axios from "axios";
import Sale from '../Sale/Sale';
import SaleInter from '../SalesInter/SaleInter';

const Url = 'https://zoopla.p.rapidapi.com/properties/list';

const Tranding = () => {

    const options = {
        params: {
            area: 'Oxford, Oxfordshire',
            identifier: 'oxford',
            category: 'residential',
            order_by: 'age',
            ordering: 'descending',
            page_number: '1',
            page_size: '40'
        },
        headers: {
            'X-RapidAPI-Key': '3645843e69mshca8c069c4cf034ap1e4c14jsn5ecfead4d08b',
            'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
        }
    };

    const [properties, setProperties] = useState([]);
    const [sales, setSales] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    
    const fetchData = async () => {
        setLoading(true)
        try {
            const response  = await axios.get(Url, options);
            console.log(response.data.listing);
            let rentApartment = response.data.listing.slice(31);
            let saleApartment = response.data.listing.slice(20, 29);
            setLoading(false)
            setProperties(rentApartment);
            setSales(saleApartment);
            setError('');

        } catch (error) {
            console.log(error);
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                <div className="container">
                    <div className='text-center mt-28 mb-16'>
                        <h5 className='text-second-color text-xl'>Rent Choices</h5>
                        <h1 className='text-5xl sm:text-6xl mb-4'>Our Apartment </h1>
                        <div className='text-center mt-32'>
                            <h1 className='text-5xl md:text-6xl'>{error}</h1>
                        </div>
                        {loading &&  <Loader className='py-16' />}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            properties.map((prop, i) => {
                                return (
                                    <div key={i}>
                                        <div>
                                            <div className='bg-white rounded-sm pb-4'>
                                                <img className='w-full h-[40vh]' src={prop.image_url} alt={prop.agent_name} />
                                                <div className='p-4'>
                                                    <h6 className='uppercase mb-2'>{prop.listing_status}</h6>
                                                    <div className='flex items-center justify-between'>
                                                        <h2 className='capitalize text-xl'>{prop.title}</h2>
                                                        <h2>{prop.price}</h2>
                                                    </div>
                                                    <div className='flex items-center justify-between my-2'>
                                                        <h2>Num Of Bathroom:  {prop.num_bathrooms}</h2>
                                                        <h2>Num Of Bedrooms:  {prop.num_bedrooms}</h2>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <h2>{prop.country}</h2>
                                                        <h2>{prop.street_name}</h2>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <h2>Phone Num: {prop.agent_phone}</h2>
                                                        <button className='py-2 px-10 bg-[transparent] border text-black mt-4 border-black hover:text-white'><a className='text-xl' href={prop.details_url}>More</a></button>
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
                <SaleInter />
                <Sale sales= {sales} error= {error} />
            </div>
        </>
    )
}

export default Tranding