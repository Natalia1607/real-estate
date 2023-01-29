import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import { Cards, Tabs } from '../components';
import './page.css';


const Rent = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
        <div className='banner'>
            <p>Popular searches</p>
            <h2>Rent</h2>
        </div>
        <div className="content__container">
            <Tabs />
            <div>form</div>
            <Breadcrumb separator=">" className='breadcrumb'>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Property for Rent</Breadcrumb.Item>
            </Breadcrumb>

            <div className={toggleState === 1 ? "active-content" : "none"}>
                <div className='cards-wrapp'>
                    <h3><a href="#">Our recommendations</a></h3>
                    <div className='cards'>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
                <div className='cards-wrapp'>
                    <h3><a href="#">Most viewed</a></h3>
                    <div className='cards'>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
                <div className='cards-wrapp'>
                    <h3><a href="#">Most recent</a></h3>
                    <div className='cards'>
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <h3>Content 1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam dignissimos reprehenderit quam mollitia officia, quo vel, incidunt suscipit minima rem ipsum accusantium nihil ab cum harum, ducimus est quis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Rent