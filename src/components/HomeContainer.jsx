import React from 'react'
import { heroData } from '../img/data'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'


function HomeContainer() {
    return (
        // change screen height if needed
        <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex gap-2  bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Bike Delivery
                    </p>
                    <div className='w-6 h-6 rounded-full overflow-hidden drop-shadow-xl'>
                        <img className='w-full h-full bg-white object-contain' src={Delivery} alt="delivery" />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor'>
                    The Fastest Delivery in
                    <span className='text-orange-600 text-[3rem] lg:text-[5rem]'> Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Being concise, the short description should highlight the best features of your app to convince the user and to increase the conversion rate. At the same time, it should include important keywords that you want your app to rank for in Google Play search. </p>
                <button type='button'
                    className='bg-gradient-to-br from-orange-400 to-orange-500 w-full p-4 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-1/4'>Order Now</button>
            </div>

            {/* best products */}

            <div className='p-2 flex-1 flex items-center relative'>
                <img className='ml-auto h-420 w-full lg:w-auto lg:h-650' src={HeroBg} alt="heroBg" />

                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 lg:pt-20 gap-4 flex-wrap drop-shadow-lg'>

                    {/* dynamic card */}
                    {heroData && heroData.map((data, i) => (
                        <div key={i} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                            <img className='w-20 lg:w-40 -mt-10 lg:-mt-20' src={data.imageSrc} alt="i1" />
                            <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{data.name}</p>
                            <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-3'>{data.decp}</p>
                            <p className='text-sm font-semibold text-headingColor'>
                                <span className='text-xs text-red-600'>$</span> {data.price}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default HomeContainer