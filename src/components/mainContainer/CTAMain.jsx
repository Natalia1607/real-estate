import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CTAMain = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='cta-main'>
      <div className='cta'>
        <Link to={'/rent'} onClick={() => toggleTab(1)} className='btn'>Rent</Link>
        <a href='!#' className='btn'>Buy</a>
      </div>
      <a href='!#' className='btn btn-primary'>Upload</a>
    </div>
  )
}

export default CTAMain
