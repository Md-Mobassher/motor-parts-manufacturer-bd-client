import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddProduct = () => {

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
                data.reset();
            }
            else{
                toast.error('Failed to Update Your Profile');
            }
        })
    }


    return (
        <div className='h-screen'>
            <h2 className='text-2xl font-bold text-center mb-8 text-purple-500'>Add Product Here </h2>
                <div class="card bg-primary lg:w-3/5 mx-auto p-10 bg-base-100 shadow-xl">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Product Name :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Product Name' {...register("product", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Product Price :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Product Price' {...register("price", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Product Quantity :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Product Quantity' {...register("user", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Description :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Product Description' {...register("description", { required: true, maxLength: 300 })} />
                         </div>

                         <div className="from-control flex justify-between items-center mb-4 w-full">
                            <label className="label  w-1/3">
                                <h2 className="label-text">Photo</h2>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-2/3 max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div> 
                        
                        <input className='btn btn-white mx-auto block' type="submit" value='Add Item'/>
                    </form>

            </div>
        </div>
    );
};

export default AddProduct;