import { useEffect, useState } from "react";

const useTool = (toolId) => {
    const [tool, setTool] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setTool(data));
    },[toolId])

    return [tool, setTool]
};

export default useTool;