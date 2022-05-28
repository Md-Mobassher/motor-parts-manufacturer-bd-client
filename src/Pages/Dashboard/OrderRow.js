import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order, refetch }) => {
    
    const { payment,quantity, email, item, role } = order;
    const handleShiped = () => {
        fetch(`https://hidden-bayou-51780.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>*</th>
            <td>{item}</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>{<button  className="btn btn-xs btn-primary">Unpaid</button>}</td>
            <td>{role !== 'admin' && <button onClick={handleShiped} className="btn btn-xs btn-primary">Shipped</button>}</td>
            
        </tr>
    );
};

export default OrderRow;