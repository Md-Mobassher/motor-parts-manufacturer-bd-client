import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, name, img, description, price, quantity, } = tool;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="tool" /></figure>
                <div class=" p-4">
                    <h2 class="card-title">{name}<div class=" ml-auto badge badge-secondary">NEW</div></h2>
                    <p>{description.slice(0,60)}</p>
                    <div>
                        <p className='text-xl font-semibold py-2'>Unit Price: <span className='text-accent font-bold'> $ {price}</span> </p>
                        <p  className='font-semibold mb-1'><span>Minimum Order:</span> {50} Pices </p>
                        <p  className='font-semibold'>Available Quantity: {quantity}</p>
                        <p className='font-semibold'> </p>
                    </div>
                    <div class="card-actions justify-end items-end mt-3">
                    <div  onClick={() => navigateToInventoryDetail(_id)}  class=" btn  btn-success badge badge-outline ">Buy Now</div> 
                    </div>
                </div>
        </div>
    );
};

export default Tool;