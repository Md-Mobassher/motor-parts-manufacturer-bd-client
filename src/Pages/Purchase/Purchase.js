import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useTool from '../../Hooks/useTool';
import Loading from '../../Shared/Loading';


const Purchase = () => {
    const [user] = useAuthState(auth);
    const {toolId} = useParams();
    const tool = useTool(toolId);
    const {img, name, _id, description, price, quantity } = tool[0]

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    
    const navigate = useNavigate()

    const { data:  isLoading } = useQuery('reviews', () => fetch('https://motor-parts-server-lvsq.onrender.com/order').then(res => res.json()))

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            user: user?.displayName,
            email:user?.email,
            item: name,
            id: _id,
            img: img,
            price:price,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
   
        fetch('https://motor-parts-server-lvsq.onrender.com/order', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(order)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Item Ordered successfully')
                        reset();
                        navigate('/myorder')
                    }
                    else{
                        toast.error('Failed to Ordered Item');
                    }
                })
    }

    if(isLoading){
        <Loading></Loading>
    }


    return (
        <section>
            <h1 className='text-center text-4xl mt-10 font-semibold'>Purchase Details</h1>
           <div className="card  lg:w-4/5 my-20 mx-auto lg:p-10 shadow-2xl lg:flex-row justify-center items-center">
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className=" w-1/2">
                     <h2 className="card-title">Name : {name}</h2>
                      <p> Description : {description}</p>
                    <div>
                        <p className='text-xl font-semibold py-2'>Unit Price: <span className='text-accent font-bold'> $ {price}</span> </p>
                        <p  className='font-semibold mb-1'><span>Minimum Order:</span> {50} Pices </p>
                        <p  className='font-semibold'>Available Quantity: {quantity}</p>
                        <p className='font-semibold'> </p>
                    </div>
                    
                </div>
            </div>

            <div className="card bg-primary lg:w-3/5 mx-auto p-10  shadow-xl">
               
                     <form onSubmit={handlePlaceOrder}>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 className=" w-1/3 inline ml-auto">Product Name :</h2>
                            <input  className="w-2/3 input input-bordered" value= {name}placeholder='Product Name' disabled {...register("product", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 className=" w-1/3 inline ml-auto">Product Quantity :</h2>
                            <input name='quantity' className="w-2/3 input input-bordered" placeholder='Product Quantity' {...register("quantity", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 className=" w-1/3 inline ml-auto">User Name :</h2>
                            <input className="w-2/3 input input-bordered" value={user?.displayName} placeholder='User Name' disabled {...register("user", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 className=" w-1/3 inline ml-auto">User email : </h2>
                            <input className="w-2/3 input input-bordered" value={user?.email} placeholder='Email' disabled {...register("email", { required: true, })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 className=" w-1/3 inline ml-auto">Phone Number :</h2>
                            <input name='phone' className="w-2/3 input input-bordered" placeholder='Phone Number' {...register("phone", { required: true, maxLength: 20 })} />
                         </div>
                         <div className='flex justify-between items-center mb-4 w-full'>
                            <h2 className=" w-1/3 inline ml-auto">Address :</h2>
                            <input name='address' className="w-2/3 input input-bordered" placeholder='Address' {...register("address", { required: true, maxLength: 20 })} />
                         </div>
                         
                      
                        <input className='btn btn-white mx-auto block'  type="submit" value='Order Now'/>
                    </form>

            </div>
        </section>
    );
};

export default Purchase;