import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useTool from '../../Hooks/useTool';

const Purchase = () => {
    const {toolId} = useParams();
    const tool = useTool(toolId);
    console.log(tool)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    

    return (
        <section>
           <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={tool.img} alt="Album"/></figure>
                <div class="card-body">
                    <h2>Name: {tool.name}</h2>
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
                         
                      
                        <input className='btn btn-white mx-auto block' type="submit" />
                    </form>

                    
              
            </div>
        </section>
    );
};

export default Purchase;