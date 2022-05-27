import React from 'react';
import mobassher from '../../Assets/image/rs.png'

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <img src={mobassher} alt='' />
                    <div>
                    <h1 class="text-3xl font-bold mb-2">Name : Md Mobassher Hossain</h1>
                    <h2 class="text-2xl font-semibold mb-2">Email : developermobassher@gmail.com</h2>
                    <h2 class="text-2xl font-semibold mb-2">Education : B.Sc in Textile Engineering at Primeasia University</h2>
                    <div className='grid grid-cols-2 gap-5 '>
                            <div className='my-5 cols-6'>
                            <h2 class="text-2xl font-semibold mb-2">Skills:</h2>
                            
                            <ul className=''>
                                <li>Html</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                            </ul>
                            </div>


                            <div className='my-5 cols-6'>
                            <h2 class="text-2xl font-semibold mb-2">Projects Link:</h2>
                            
                            <ul className=''>
                                <li>1.	https://groca-grocery.web.app/</li>
                                <li>2.  https://dentist-rita.web.app/</li>
                                <li>3.  https://motor-parts-bd.web.app</li>
                            
                            </ul>
                            </div>
                    </div>
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;