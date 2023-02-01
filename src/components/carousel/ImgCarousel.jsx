import React from 'react';
import './imgCarouselStyles.css';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import slide6 from '../../assets/slide6.jpg';
import Slider from 'react-slick';

const ImgCarousel = () => {
    const settings_l = {
        arrows: false,
        dots: false,
        initialSlide: 0,
        easing:'linear',
        draggable:true,
        swipe:true,
        speed: 9000,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        vertical: true,
        verticalSwiping: true,
      };

    const settings_r = {
        speed: 10000,
      };
    
      /* const generateSlides = ({slides}) => {
        if(slides){
             return (
                <Slider {...settings}>
                <div>
                    {slides.map((item)=><div key={item.id}><SlideElement item={item} /></div>
                    )}
                    </div> 
                </Slider>
            )
        }
    } */
  return (
    <div className='carousel'>
        <Slider  className='carousel__item carousel__item-l' {...settings_l}>
            <div className='carousel__img'>
                <img src={slide1} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide2} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide3} alt="#" />
            </div>
        </Slider>
        <Slider className='carousel__item carousel__item-r' {...settings_l} {...settings_r}>
            <div className='carousel__img'>
                <img src={slide4} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide5} alt="#" />
            </div>
            <div className='carousel__img'>
                <img src={slide6} alt="#" />
            </div>
        </Slider>
    </div>
  )
}

export default ImgCarousel
