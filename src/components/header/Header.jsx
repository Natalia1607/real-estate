import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';
import './headerStyles.css';



const Header = () => {
  return (
    <header className='container'>
      <div className="header__container">
        <Link to={'/'} className='header__logotip'>
            Dillantum.
            <small>Real Estate</small>
        </Link>
        <CTA />
      </div>
    </header>
  )
}

export default Header
