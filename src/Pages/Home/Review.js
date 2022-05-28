import React from 'react';

const Review = ({review}) => {

    return (
        <div className="card bg-base-100 shadow-xl ">
                <div className="avatar mx-auto pt-8 ">
                    <div className="w-24 rounded-full">
                        <img src={review.img} alt={review.name}/>
                    </div>
                </div>
                <div className=" p-6 flex flex-col justify-center items-center">
                    <h2 className="card-title mb-3">{review.name}</h2>
                    <h3 className='font-semibold mb-2'>Rating: {review.rating}</h3>
                    <h3 className='text-center'> {review.review}</h3>
                </div>
        </div>
    );
};

export default Review;