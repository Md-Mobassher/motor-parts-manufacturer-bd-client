import React from 'react';
import { toast } from 'react-toastify';


const DeleteConfirmModal = ({deletingTool, refetch, setDeletingTool}) => {
    const {name, _id} = deletingTool;
    const handleDelete = () => {
        fetch(`https://motor-parts-server-lvsq.onrender.com/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast(`Tool is deleted successfully.`)
                    setDeletingTool(null);
                    refetch();
                }
            })
    }

    
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete  ${name}!</h3>
                    
                    <div className="modal-action">
                    <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;