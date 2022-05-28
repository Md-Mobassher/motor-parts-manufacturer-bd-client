import React from 'react';
import { Link } from 'react-router-dom';

const Recommended = () => {
    return (
        <section>
            <h2 className='text-3xl font-bold text-center my-20'>Discount Offer</h2>
            <div className=" card w-75 bg-base-100 shadow-2xl w-4/5 mx-auto flex justify-center items-center p-10">
                <div className="col-md-5 col-sm-12">
                    <div className='text-center  fw-bold fst-italic'>
                        <h2 className='text-3xl  font-semibold mb-4'>Special Discount </h2>
                        <h2 className='text-3xl  font-semibold mb-4'>For All Parts </h2>
                        <p className='mt-5 font-semibold text-xl lg:px-16'>There is a big opportunity for all of our customers. If you buy at least 10000 items, you will get maximum 30% discount.   </p>
                        <p className='my-5 font-semibold text-xl'>Happy Shopping</p>

                        <Link to='/' className=" btn  btn-primary badge badge-outline mt-5" variant="success" type="submit">
                                Shop Now
                        </Link>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    
                </div>
            </div>
        </section>
    );
};

export default Recommended;