import React from 'react';
import ImgCarousel from '../carousel/ImgCarousel';
import CTAMain from './CTAMain';

import './mainContainerStyles.css';

const MainContainer = () => {
  return (
    <div className='container main__container'>
      <div className='main__container_carousel'>
        <ImgCarousel/>
      </div>
      <h1>WE FIND APPROPRIATE PROPERTY</h1>
      <CTAMain />
    </div>
  )
}

export default MainContainer
