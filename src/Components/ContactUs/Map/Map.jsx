import React from 'react'

const Map = () => {
    return (
        <>
            <div className='mt-36 mb-8'>
                <div className="container">
                    <div className='textCenter relative mb-28'>
                        <h1 className='text-5xl sm:text-6xl'>Where You Can Find Us</h1>
                    </div>

                </div>
                <div>
                    <iframe className='w-full h-[60rem] border-none' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51144.64787850354!2d3.456667527518156!3d36.757599268932985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e68dcc89e5b23%3A0x84e914279405eb13!2sBoumerdes!5e0!3m2!1sen!2sdz!4v1662045046765!5m2!1sen!2sdz" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </>
    )
}

export default Map