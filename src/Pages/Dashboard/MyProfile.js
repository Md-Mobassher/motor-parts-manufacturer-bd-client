import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [ user ] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        fetch('http://localhost:5000/user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(inserted =>{
            if(inserted.insertedId){
                toast.success('You Profile Updated successfully')
                reset();
            }
            else{
                toast.error('Failed to Update Your Profile');
            }
        })
    }

    return (
        <div className='h-screen'>
            <h2 className='text-2xl font-bold text-center mb-8 text-purple-500'>Welcome to Your Profile</h2>
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
                        <h2 class=" w-1/3 inline ml-auto">Phone Number :</h2>
                        <input class="w-2/3 input input-bordered" placeholder='Phone Number' {...register("phone", { required: true, maxLength: 20 })} />
                    </div>
                    <div className='flex justify-between items-center mb-4 w-full'>
                        <h2 class=" w-1/3 inline ml-auto">Address :</h2>
                        <input class="w-2/3 input input-bordered" placeholder='Address' {...register("address",  { required: true, })} />
                    </div>
                    <div className='flex justify-between items-center mb-4 w-full'>
                        <h2 class=" w-1/3 inline ml-auto">Linkedin Profile Link :</h2>
                        <input class="w-2/3 input input-bordered" placeholder='Linkedin profile' {...register("likedin", { required: false, maxLength: 20 })} />
                    </div>
                    
                    
                    <input className='btn btn-white mx-auto block' type="submit" value='Update Profile'/>
                </form>

            </div>
        </div>
    );
};

export default MyProfile;