import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';


const MyOrder = () => {
   const [user] = useAuthState(auth);
   const email = user?.email;

   const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://hidden-bayou-51780.herokuapp.com/order', {
    method: 'GET',
    headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
   }).then(res => res.json()));

   if (isLoading) {
    return <Loading></Loading>
   }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to Cancel?');
        if(proceed){
            fetch(`https://hidden-bayou-51780.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast(`Order is Canceled successfully.`)
                    refetch()
                }
            })
        }
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='lg:w-4/5 mx-auto'>
            <h2 className="text-2xl text-center mt-5 mb-4">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.item}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                               
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                                <td>
                                   <button onClick={() => handleDelete(order._id)} className='btn btn-xs btn-danger'>Delete</button>
                               </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default MyOrder;