import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';
import './headerStyles.css';

import { RiMenu3Fill } from 'react-icons/ri';

const Header = () => {
  return (
    <header className='container'>
      <div className="header__container md-flex">
        <Link to={'/'} className='header__logotip'>
          Dillantum.
          <small>Real Estate</small>
        </Link> 
        <CTA />
      </div>
      <div className="header__container header__mobile md-hidden">
        <Link to={'/'} className='header__logotip'>
          Dillantum.
          <small>Real Estate</small>
        </Link>
        <RiMenu3Fill className='header__mobile-icon icon'/>
      </div>
    </header>
  )
}

export default Header
