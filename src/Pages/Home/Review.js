import React from 'react';

const Review = ({review}) => {

    return (
        <div class="card bg-base-100 shadow-xl ">
                <div class="avatar mx-auto p-5 ">
                    <div class="w-24 rounded-full">
                        <img src={review.img} />
                    </div>
                </div>
                <div class=" p-5 flex flex-col justify-center items-center">
                    <h2 class="card-title">{review.name}</h2>
                    <h3 className='font-semibold'>Rating: {review.rating}</h3>
                    <h3 className='text-center'><span className='font-semibold'>Review:</span> {review.review}</h3>
                </div>
        </div>
    );
};

export default Review;