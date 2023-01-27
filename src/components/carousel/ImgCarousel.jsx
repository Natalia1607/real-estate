import React from 'react';
import './imgCarouselStyles.css';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import slide6 from '../../assets/slide6.jpg';

const ImgCarousel = () => {
  return (
    <div className='carousel'>
        <div className='carousel__item carousel__item-l'>
            <div className='carousel__img'>
                <img src={slide1} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide2} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide3} alt="#" />
            </div>
        </div>
        <div className='carousel__item carousel__item-r'>
            <div className='carousel__img'>
                <img src={slide4} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide5} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide6} alt="#" />
            </div>
        </div>
    </div>
  )
}

export default ImgCarousel
