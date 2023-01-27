import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';
import './headerStyles.css';



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Link to={'/'} className='header__logotip'>
            Dillantum.<br />
            <small>RealEstate</small>
        </Link>
        <CTA />
      </div>
    </header>
  )
}

export default Header
