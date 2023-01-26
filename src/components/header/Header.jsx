import React from 'react';
import CTA from './CTA';
import './headerStyles.css';



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <a href="!#" className='header__logotip'>
            Dillantum.<br />
            <small>RealEstate</small>
        </a>
        <CTA />
      </div>
    </header>
  )
}

export default Header
