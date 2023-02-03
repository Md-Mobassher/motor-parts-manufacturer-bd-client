import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ToolRow from './ToolRaw';

const ManageProduct = () => {
    const [deletingTool, setDeletingTool] = useState(null);

    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://motor-parts-server-lvsq.onrender.com/tool', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl text-center mb-2">Manage Items: {tools.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ToolRow
                                key={tool._id}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                                setDeletingTool={setDeletingTool}
                            ></ToolRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingTool && <DeleteConfirmModal
                deletingTool={deletingTool}
                refetch={refetch}
                setDeletingTool={setDeletingTool}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProduct;