import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, name, img, description, price, quantity, } = tool;
    const navigate = useNavigate();

    const navigateToPurchaseTool = id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card bg-base-100 shadow-xl ">
                <figure><img className='p-5' src={img} alt="tool" /></figure>
                <div className=" p-4">
                    <h2 className="card-title">{name}<div className=" ml-auto badge badge-secondary">NEW</div></h2>
                    <p>{description.slice(0,60)}</p>
                    <div>
                        <p className='text-xl font-semibold py-2'>Unit Price: <span className='text-accent font-bold'> $ {price}</span> </p>
                        <p  className='font-semibold mb-1'><span>Minimum Order:</span> {50} Pices </p>
                        <p  className='font-semibold'>Available Quantity: {quantity}</p>
                        <p className='font-semibold'> </p>
                    </div>
                    <div className="card-actions justify-end items-end mt-3">
                    <div  onClick={() => navigateToPurchaseTool(_id)}  className=" btn  btn-primary badge badge-outline ">Buy Now</div> 
                    </div>
                </div>
        </div>
    );
};

export default Tool;