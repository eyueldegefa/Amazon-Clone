import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import {img} from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';

function CarouselEffect () {
  return (
    <div className=''>
        <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        >
            {
                img.map((imagelink)=>{
                  return <img src={imagelink}/>
                })
            }
        </Carousel>
        <div className='shadow'></div>
    </div>
  )
}

export default CarouselEffect