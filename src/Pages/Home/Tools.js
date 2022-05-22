import React from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-20'>Tools and Parts</h2>

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    <Link to='/purchase' class=" btn btn-primary badge badge-outline">Buy Now</Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;