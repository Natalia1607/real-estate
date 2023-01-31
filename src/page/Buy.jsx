import { Breadcrumb } from 'antd';
import React from 'react';
import { Cards, Search, Footer } from '../components';
import './page.css';


const Buy = () => {
  return (
    <div className="container">
        <div className='banner'>
            <p>Popular searches</p>
            <h2>Buy</h2>
        </div>
        <div className="content__container">
            <Search />
            <Breadcrumb separator=">" className='breadcrumb'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Property for Buy</Breadcrumb.Item>
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
        <Footer />
    </div>
  )
}

export default Buy