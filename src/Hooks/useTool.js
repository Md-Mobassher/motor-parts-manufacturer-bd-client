import { useEffect, useState } from "react";

const useTool = (toolId) => {
    const [tool, setTool] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${toolId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })    
        .then(res => res.json())
        .then(data => setTool(data));
    },[toolId])

    return [tool, setTool]
};

export default useTool;