import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useTool from '../../Hooks/useTool';


const Purchase = () => {
    const {toolId} = useParams();
    const tool = useTool(toolId);
    console.log(tool)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);
    

    return (
        <section>
           <div class="card bg-base-200 w-4/5 my-20 mx-auto p-10 bg-base-100 shadow-xl flex">
                <div className='w-1/2'>
                    <img src={tool.img} alt="" />
                </div>
                <div class=" w-1/2">
                     <h2 class="card-title">Name : {tool.name}</h2>
                      <p> Description : {tool.description}</p>
                    <div>
                        <p className='text-xl font-semibold py-2'>Unit Price: <span className='text-accent font-bold'> $ {tool.price}</span> </p>
                        <p  className='font-semibold mb-1'><span>Minimum Order:</span> {50} Pices </p>
                        <p  className='font-semibold'>Available Quantity: {tool.quantity}</p>
                        <p className='font-semibold'> </p>
                    </div>
                    
                </div>
            </div>

            <div class="card bg-primary lg:w-3/5 mx-auto p-10 bg-base-100 shadow-xl">
               
                     <form onSubmit={handleSubmit(onSubmit)}>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Product Name :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Product Name' {...register("product", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Product Quantity :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Product Quantity' {...register("user", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">User Name :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='User Name' {...register("user", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">User email :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Email' {...register("email", { required: true, })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Phone Number :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Phone Number' {...register("phone", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 class=" w-1/3 inline ml-auto">Address :</h2>
                            <input class="w-2/3 input input-bordered" placeholder='Address' {...register("address", { required: true, maxLength: 20 })} />
                         </div>
                         
                      
                        <input className='btn btn-white mx-auto block' type="submit" value='Order Now'/>
                    </form>

            </div>
        </section>
    );
};

export default Purchase;