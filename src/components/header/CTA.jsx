import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

const CTA = () => {
  const [ nav, setNav ] = useState(false);
  const handleNav = () => setNav(!nav);
  const location = useLocation(); 
  if(location.pathname === '/' || location.pathname === '/register' || location.pathname === '/sign-in') {
    return (  
      <>
        <div className='cta'>
          <Link to={'/sign-in'} className='btn'>Sign in</Link>
          <Link to={'/register'} className='btn btn-primary'>Register</Link>
        </div>
      </>
    )
  }
  return ( 
    <>
      <div className='hamburger' onClick={handleNav}>
          {!nav ? (<RiMenu3Fill className='icon' size={26} />) : (<RiCloseFill className='icon' size={26}/>)}
      </div>
      <div className={nav ? 'header__menu container active' : 'header__menu container'}>
        <ul className="header__nav">
          <Link to={'/'}><li>Home</li></Link> 
          {location.pathname !== '/rent' 
          ? <Link to={'/rent'}><li>Property for Rent</li></Link>     
          : <Link to={'#'} className='none'><li></li></Link>   
          }     
          {location.pathname !== '/buy' 
          ? <Link to={'/buy'}><li>Property for Buy</li></Link>     
          : <Link to={'#'} className='none'><li></li></Link>   
          }     
          <Link to={'#'}><li>Agent Portal</li></Link>     
          <Link to={'#'}><li>Blog</li></Link>     
        </ul>
        <div className='header__menu-bottom'>
          <div className='cta'>
            <Link to={'/sign-in'} className='btn'>Sign in</Link>
            <Link to={'/register'} className='btn btn-primary'>Register</Link>
          </div>
        </div>
      </div>
    </> 
  )
}

export default CTA
