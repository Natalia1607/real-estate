import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CTAMain = () => {
  return (
    <div className='cta-main flex jc-fe ai-c gap'>
      <div className='flex jc-sb gap'>
        <Link to={'/rent'} className='btn'>Rent</Link>
        <Link to={'/buy'} className='btn'>Buy</Link>
      </div>
      <a href='!#' className='btn'>Upload</a>
    </div>
  )
}

export default CTAMain
