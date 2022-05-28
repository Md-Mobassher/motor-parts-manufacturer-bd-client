import React from 'react';


const ToolRow = ({ tool, index, refetch, setDeletingTool }) => {
    const { name, quantity, img,  } = tool;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingTool(tool)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ToolRow;