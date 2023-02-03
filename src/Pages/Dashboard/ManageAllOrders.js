import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import OrderRow from './OrderRow';


const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://motor-parts-server-lvsq.onrender.com/order', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl">All Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>User Email</th>
                           <th>Payment</th>
                           <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           orders.map(order=><OrderRow
                           key={order._id}
                           order={order}
                           refetch={refetch}
                           ></OrderRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;