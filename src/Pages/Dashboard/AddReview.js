import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const [ user ] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className='h-screen'>
        <h2 className='text-2xl font-bold text-center mb-8 text-purple-500'>Add a Review</h2>
            <div class="card bg-primary lg:w-3/5 mx-auto p-10 bg-base-100 shadow-xl">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between items-center mb-4 w-full'>
                    <h2 class=" w-1/3 inline ml-auto"> Your Name :</h2>
                    <input class="w-2/3 input input-bordered" value={user?.displayName} placeholder=' Your Name' disabled required {...register("user", { required: true,  })} />
                </div>
                <div className='flex justify-between items-center mb-4 w-full'>
                    <h2 class=" w-1/3 inline ml-auto">Your Email:</h2>
                    <input class="w-2/3 input input-bordered" value={user?.email} placeholder='Your email' disabled required {...register("email", { required: true, })} />
                </div>
                <div className='flex justify-between items-center mb-4 w-full'>
                    <h2 class=" w-1/3 inline ml-auto">Write a Review :</h2>
                    <textarea class="w-2/3 textarea textarea-info" placeholder='Add Review' {...register("review", { required: true, maxLength: 300 })} />
                </div>
                
                
                <input className='btn btn-red mx-auto block' type="submit" value='Add Review'/>
            </form>

        </div>
    </div>
    );
};

export default AddReview;