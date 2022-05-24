import React, { useEffect, useState } from 'react';
import Tool from './Tool';


const Tools = () => {

    const [tools, setTools] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => setTools(data));
    }, []);

    return (
        <div className='lg:px-20 sm:p-5 mx-auto'>
            <h2 className='text-3xl font-bold text-center my-20'>Tools and Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            
        </div>
    );
};

export default Tools;