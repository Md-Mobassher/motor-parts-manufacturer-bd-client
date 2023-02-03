import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const AddReview = () => {
    const [ user ] = useAuthState(auth);
    console.log(user)
    const { register, formState: { errors }, reset } = useForm();

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://motor-parts-server-lvsq.onrender.com/review').then(res => res.json()))
 

    const handleReview =  event => {
        event.preventDefault();
             const review = {
                name: user?.displayName,
                img: user?.photoURL,
                email: user?.email,
                rating: event.target.rating.value,
                review: event.target.review.value
        }
        console.log(review)

                // send to database
             fetch('https://motor-parts-server-lvsq.onrender.com/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Review added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add Review');
                    }
                })
 
    }

    if(isLoading){
        <Loading></Loading>
    }

    return (
        <div className='h-screen'>
        <h2 className='text-2xl font-bold text-center mb-8 text-purple-500'>Add a Review</h2>
            <div className="card bg-primary lg:w-3/5 mx-auto p-10 bg-base-100 shadow-xl">
            
            <form onSubmit={handleReview}>
                        <div className="form-control  mb-2 w-full ">
                         
                                <label className="label ">
                                    <h2 className="label-text font-semibold">Your Name :</h2>
                                </label>
                            
                                 <input
                                    type="name"
                                    value={user?.displayName}
                                    placeholder="Product Name"
                                    className="input input-bordered w-full"
                                    disabled
                                    {...register("user", {
                                        required: {
                                            value: true,
                                            message: 'User Name is Required'
                                        },
                                    })}
                                />

                        </div>


                        <div className="form-control mb-2 w-full ">
                                <label className="label ">
                                    <h2 className="label-text font-semibold">Your Email :</h2>
                                </label>
                            <input
                                type="email"
                                value={user?.email}
                                disabled
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                           
                        </div>

                        <div className="form-control mb-2 w-full ">
                             <label className="label ">
                                <h2 className="label-text font-semibold">Enter a Rating:</h2>
                            </label>
                            <input
                                name='rating'
                                type="number"
                                placeholder="Enter a Rating here"
                                className="input input-bordered w-full"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is Required'

                                    },
                                    minLength: {
                                       min:1,
                                        message: ' Minimum value At least 1'
                                    },
                                    maxLength: {
                                       max:5,
                                        message: ' Maximum value At least 5'
                                    },
                                  
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                {errors.rating?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                {errors.rating?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                            </label>
                        </div>

                        <div className="form-control mb-2 w-full ">
                             <label className="label ">
                                <h2 className="label-text font-semibold">Write a Review :</h2>
                            </label>
                            <textarea
                                name='review'
                                type="text"
                                placeholder="Write a Review"
                                className="textarea textarea-bordered w-full"
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Review is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}

                            </label>
                        </div>

                        
                        <input className='btn btn-white mx-auto block' type="submit" value='Add Review'/>
                </form>

        </div>
    </div>
    );
};

export default AddReview;