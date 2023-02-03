import React, { useEffect, useState } from 'react';
import Review from './Review';


const Reviews = () => {

    const [reviews, setReviews] = useState([])
    
    useEffect( () =>{
        fetch(`https://motor-parts-server-lvsq.onrender.com/review`,{
            
            method: 'GET',
                headers: {
                    'content-type': 'application/json',
                           
                },           
        })      
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);


    return (
        <section>
            <h2 className='text-3xl font-bold text-center my-20'>Reviews</h2>
            <div className='lg:px-20 sm:p-5 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            
        </div>
        </section>
    );
};

export default Reviews;