import React, { useEffect, useState } from 'react';
import Tool from './Tool';


const Tools = () => {

    const [tools, setTools] = useState([]);
    
    useEffect( () =>{
        fetch('https://hidden-bayou-51780.herokuapp.com/tool',{
            
                method: 'GET',
                        headers: {
                            'content-type': 'application/json',
                           
                        },
            
        })      
        .then(res => res.json())
        .then(data => setTools(data));
    }, []);

    return (
        <div className='lg:px-20 sm:p-5 mx-auto'>
            <h2 className='text-3xl font-bold text-center my-20'>Tools and Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
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