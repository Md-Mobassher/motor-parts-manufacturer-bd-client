import React from 'react';
import bike1 from '../../Assets/image/banner/bike1.jpg'
import bike2 from '../../Assets/image/banner/bike2.jpg'
import bike3 from '../../Assets/image/banner/bike3.jpg'
import bike4 from '../../Assets/image/banner/bike5.jpg'

const Banner = () => {
    return (
        <section>
            <div className="carousel w-screen h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bike1} className="w-full" alt='bike' />  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bike2} className="w-full" alt=''  /> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bike3} className="w-full" alt='' />  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bike4} className="w-full" alt='' />  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                
            </div>
        </section>
    );
};

export default Banner;