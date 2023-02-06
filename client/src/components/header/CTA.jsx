import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';

import { RiMenu3Fill, RiCloseFill, RiUser3Fill } from 'react-icons/ri';

const CTA = () => {
  const [ nav, setNav ] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    });
  }, []);
  const handleNav = () => setNav(!nav);
  const location = useLocation(); 
  if(location.pathname === '/' || location.pathname === '/register' || location.pathname === '/sign-in') {
    return (  
      <>
        <div className='cta flex jc-sb gap'>
          <Link to={'/sign-in'} className='btn'>Sign in</Link>
          <Link to={'/register'} className='btn'>Register</Link>
        </div>
      </>
    )
  };

  
  return ( 
    <>
      <div className='header__icons flex ai-c'>
        {authUser ? <Link to={'/personal_account'}><RiUser3Fill className='icon' size={20}/></Link> : <p className='none'></p>}
        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<RiMenu3Fill className='icon' size={26} />) : (<RiCloseFill className='icon' size={26}/>)}
        </div>
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
          <div className='cta flex gap jc-c'>
            <Link to={'/sign-in'} className='btn'>Sign in</Link>
            <Link to={'/register'} className='btn'>Register</Link>
          </div>
        </div>
      </div>
    </> 
  )
}

export default CTA
