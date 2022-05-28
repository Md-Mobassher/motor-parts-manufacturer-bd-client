import React from 'react';

const GetQuote = () => {
    return (
        <div className='my-20 mx-auto  w-4/6'>
            <h2 className='text-3xl font-bold text-center mb-16'>Get Quote</h2>
                <div class="card w-75 bg-base-100 shadow-2xl">
                    <div class="lg:p-10 p-5 lg:flex justify-between items-center">
                        <div className='my-4'>
                            <h2 class="text-2xl text-accent font-semibold mb-2">Have any Question about Us?</h2>
                            <p className='text-3xl text-primary font-bold mb-2'>Get a quote</p>
                            <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs mt-6" />
                        </div>
                        <div class="block ms-auto mt-auto">
                            
                             <button class="btn btn-primary  sm:mt-10">Sent Quote</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default GetQuote;