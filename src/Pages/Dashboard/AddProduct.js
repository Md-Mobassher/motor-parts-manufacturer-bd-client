import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';


const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

 
    const { data: tool, isLoading } = useQuery('tool', () => fetch('https://hidden-bayou-51780.herokuapp.com/tool').then(res => res.json()))
 
    const imageStorageKey='2cefe4cba91cd48a6540132ab05c3182';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const tool = {
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,
                    description: data.description,
                    img: img
                }

                     // send to your database
                fetch('https://hidden-bayou-51780.herokuapp.com/tool', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(tool)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast('Item added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add Item');
                    }
                })
 
            }
           
        })
    }
 
    if (isLoading) {
        return <Loading></Loading>
    }

       
  


    return (
        <div className='h-screen'>
            <h2 className='text-2xl font-bold text-center mb-8 text-purple-500'>Add Item Here </h2>
                <div className="card bg-primary lg:w-3/5 mx-auto p-10 bg-base-100 shadow-xl">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control  mb-0 w-full ">
                         
                                <label className="label ">
                                    <h2 className="label-text font-semibold">Product Name :</h2>
                                </label>
                            
                                 <input
                                    type="name"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        },
                                    })}
                                />
                                <label className="label ml-auto">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                         
                        </div>


                        <div className="form-control  mb-0 w-full ">
                             <label className="label ">
                                <h2 className="label-text font-semibold">Product Price</h2>
                            </label>
                            <input
                                type="number"
                                placeholder="Product Price"
                                className="input input-bordered w-full "
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Product Price is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                            </label>
                        </div>

                        <div className="form-control  mb-0 w-full ">
                             <label className="label ">
                                <h2 className="label-text font-semibold">Product Quantity :</h2>
                            </label>
                            <input
                                type="number"
                                placeholder="Product Quantity"
                                className="input input-bordered w-full"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Product Quantity is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                            </label>
                        </div>


                        <div className="form-control mb-0 w-full ">
                             <label className="label ">
                                <h2 className="label-text font-semibold">Product Description :</h2>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Product Description"
                                className="textarea textarea-bordered w-full"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Product Description is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                            </label>
                        </div>


                         <div className="from-control  justify-between items-center mb-4 w-full">
                            <label className="label">
                                <h2 className="label-text font-semibold">Photo</h2>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>
                            </div> 
                        
                        <input className='btn btn-white mx-auto block' type="submit" value='Add Item'/>
                    </form>

            </div>
        </div>
    );
};

export default AddProduct;