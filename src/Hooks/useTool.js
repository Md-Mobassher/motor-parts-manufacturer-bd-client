import { useEffect, useState } from "react";

const useTool = (toolId) => {
    const [tool, setTool] = useState([]);

    useEffect(() => {
        fetch(`https://motor-parts-server-lvsq.onrender.com/tool/${toolId}`, {
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