import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    console.log(user)
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://motor-parts-server-lvsq.onrender.com/user/admin/${email}`, {
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

    const removeUser = () => {
        const proced = window.confirm("Are you sure you want to delete the user")
       if(proced){
        fetch(`https://motor-parts-server-lvsq.onrender.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast(`User is deleted successfully.`)
                    refetch();
                }
            })
       }
    }
  

    return (
        <tr>
            <th>*</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs btn-primary">Make Admin</button>}</td>
            <td><button onClick={removeUser} className="btn btn-xs btn-error">Remove User</button></td>
        </tr>
    );
};

export default UserRow;