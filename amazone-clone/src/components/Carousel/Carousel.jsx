import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import {img} from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.module.css';

function CarouselEffect () {
  return (
    <div className='hero__img'>
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
    </div>
  )
}

export default CarouselEffect