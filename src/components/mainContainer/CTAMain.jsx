import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CTAMain = () => {
  return (
    <div className='cta-main'>
      <div className='cta'>
        <Link to={'/rent'} className='btn'>Rent</Link>
        <Link to={'/buy'} className='btn'>Buy</Link>
      </div>
      <a href='!#' className='btn btn-primary'>Upload</a>
    </div>
  )
}

export default CTAMain
