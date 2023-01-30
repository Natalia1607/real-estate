import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { Cards, Tabs, Search } from '../components';
import './page.css';

const Rent = () => {
  const location = useLocation();

  return (
    <div className="container">
        <div className='banner'>
            <p>Popular searches</p>
            <h2>Rent</h2>
        </div>
        <div className="content__container">
            <Tabs />
            <div className={location.pathname === '/rent' ? "" : "none"}>
                <Search />
                <Breadcrumb separator=">" className='breadcrumb'>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Property for Rent</Breadcrumb.Item>
                </Breadcrumb>

                <div className='cards-wrapp'>
                    <h3><a href="#">Our recommendations</a></h3>
                    <Cards />
                </div>
                <div className='cards-wrapp'>
                    <h3><a href="#">Most viewed</a></h3>
                    <Cards />
                </div>
                <div className='cards-wrapp'>
                    <h3><a href="#">Most recent</a></h3>
                    <Cards />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rent