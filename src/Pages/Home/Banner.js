import React from 'react';
import { Link } from 'react-router-dom';
import bike1 from '../../Assets/image/banner/bike1.jpg'


const Banner = () => {
    return (
        <section>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse lg:px-20 lg:-mt-10">
                    <div className='flex-1'>
                        <img src={bike1} class=" rounded-lg  " alt=''/>
                    </div>
                    <div className='flex-1 p-5'>
                        <h1 class="lg:text-5xl text-4xl font-bold mb-3">Best Motor Parts</h1>
                        <p class="py-6 mb-3">We are the motor parts manufacturer company. We provide the best quality of motor parts. Buy our products you will get life time membership from us.</p>
                        <Link to='' class="btn btn-primary">Buy Now</Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Banner;