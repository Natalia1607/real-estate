import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='cta'>
      <Link to={'/sign-in'} className='btn'>Sign in</Link>
      <Link to={'/register'} className='btn btn-primary'>Register</Link>
    </div>
  )
}

export default CTA
