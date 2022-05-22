import React from 'react';
import bike1 from '../../Assets/image/banner/bike1.jpg'
import bike2 from '../../Assets/image/banner/bike2.jpg'
import bike3 from '../../Assets/image/banner/bike3.jpg'
import bike4 from '../../Assets/image/banner/bike5.jpg'

const Banner = () => {
    return (
        <section>
            <div class="carousel w-screen h-screen">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={bike4} class="w-full" alt='bike' />  
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={bike2} class="w-full" alt=''  /> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={bike3} class="w-full" alt='' />  
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={bike1} class="w-full" alt='' />  
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                
            </div>
        </section>
    );
};

export default Banner;