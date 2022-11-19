import React from 'react';
import mobassher from '../../Assets/image/rs.png'

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <img src={mobassher} alt='' />
                    <div>
                    <h1 class="text-3xl font-bold text mb-2">Name : <span className='text-primary'>Md Mobassher Hossain</span></h1>
                    <h2 class="text-xl font-bold mb-2">Email : <span className='text-primary-focus'>mdmobassherhossain1@gmail.com</span></h2>
                    <h2 class="text-xl font-bold mb-2">Education : B.Sc in Textile Engineering at Primeasia University</h2>
                    <h2 class="text-xl font-bold mb-2">Portfolio: <a className=' text-primary-focus' href="https://dev-mobassher.web.app">dev-mobassher.web.app</a></h2>
                    <div className='grid grid-cols-2 gap-5 '>
                        <div className='my-5 cols-6'>
                            <h2 class="text-2xl text-primary font-semibold mb-2">Skills:</h2>
                            
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
                                <li>Wordpress</li>
                            </ul>
                            </div>


                            <div className='my-5 cols-6'>
                            <h2 class="text-2xl text-primary font-semibold mb-2">Projects Link:</h2>
                            
                            <ul className=''>
                                <li className='link'>1.  https://motor-parts-bd.web.app</li>
                                <li className='link'>2.	https://groca-grocery.web.app</li>
                                <li className='link'>3.  https://dentist-rita.web.app</li>
                                {/* <li className='link'>4.  https://motor-parts-bd.web.app</li>
                                <li className='link'>5.  https://motor-parts-bd.web.app</li> */}
                            
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