import React from 'react';
import { FaFlagUsa } from 'react-icons/fa';
import { AiFillDollarCircle } from "react-icons/ai";
import { FaThumbsUp } from 'react-icons/fa';
import { FaPeopleCarry } from 'react-icons/fa';

const BusinessSummary = () => {
    return (
        <section className='px-20'>
            <h2 className='text-3xl font-bold text-center my-20'>Business Summary</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='flex flex-col  items-center  shadow-lg rounded-lg p-5'>
                    <p><FaFlagUsa  className='w-12 h-12 text-secondary' /></p>
                    <h1 className='text-5xl font-bold text-primary my-5'>50+</h1>
                    <p className='text-xl font-semibold text-assent'>Countries</p>
                </div>
                <div className='flex flex-col  items-center shadow-lg rounded-lg p-5'>
                    <p><FaPeopleCarry  className='w-12 h-12 text-secondary' /></p>
                    <h1 className='text-5xl font-bold text-primary my-5'>2000+</h1>
                    <p className='text-xl font-semibold text-assent'>Serve Customer</p>
                </div>
                <div className='flex flex-col  items-center shadow-lg rounded-lg p-5'>
                    <p><AiFillDollarCircle  className='w-12 h-12 text-secondary' /></p>
                    <h1 className='text-5xl font-bold text-primary my-5'>150M</h1>
                    <p className='text-xl font-semibold text-assent'>Annual Revenue</p>
                </div>
                <div className='flex flex-col  items-center shadow-lg rounded-lg p-5'>
                    <p><FaThumbsUp  className='w-12 h-12 text-secondary' /></p>
                    <h1 className='text-5xl font-bold text-primary my-5'>35K+</h1>
                    <p className='text-xl font-semibold text-assent'>Reviews</p>
                </div>
                
            </div>
        </section>
    );
};

export default BusinessSummary;