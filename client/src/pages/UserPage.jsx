import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { Footer, Cards } from '../components';

import { GiArchiveResearch } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';
import { IoIosListBox } from 'react-icons/io';

import './page.css';

const UserPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container page__container">
        <div className='banner'></div>
        <Breadcrumb separator=">" className='breadcrumb mt12 mb24'>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Personal account</Breadcrumb.Item>
        </Breadcrumb>
        <div className='flex jc-sb mb24'>
          <div className="user__icons flex jc-c gap">
            <Link to={'/personal_account/searches'} className='flex column ai-c'>
              <GiArchiveResearch className='icon' size={26}/>
              <span>My Searches</span>
            </Link>
            <Link to={'/personal_account/favorites'} className='flex column ai-c'>
              <MdFavorite className='icon' size={26}/>
              <span>Favorites</span>
            </Link>
            <Link to={'/personal_account/ads'} className='flex column ai-c'>
              <IoIosListBox className='icon' size={26}/>
              <span>My Ads</span>
            </Link>
          </div>
          <a href='!#' className='btn btn-primary'>Upload</a>
        </div>
        <Cards />
        <Footer />
    </div>
  )
}

export default UserPage