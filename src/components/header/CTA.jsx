import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='cta'>
      <a href='!#' download className='btn'>Sign in</a>
      <Link to={'/register'} className='btn btn-primary'>Register</Link>
    </div>
  )
}

export default CTA
