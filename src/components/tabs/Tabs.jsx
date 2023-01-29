import React, { useState } from 'react';
import './tabsStyles.css'; 
import { Link } from 'react-router-dom';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='tabs__container'>
        <div className="block-tabs">
            <Link to={'/rent/rent-daily'} className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Short Term (Daily)</Link>
            <a href='#' className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Short Term (Monthly)</a>
            <a href='#' className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Long Term (Yearly) </a>
            <a href='#' className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>Commercial for Rent</a>
        </div>

        <div className="content-tabs">
            
            <div className={toggleState === 3 ? "content  active-content" : "content"}>
                <h3>Content 2</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam dignissimos reprehenderit quam mollitia officia, quo vel, incidunt suscipit minima rem ipsum accusantium nihil ab cum harum, ducimus est quis.
                </p>
            </div>
            <div className={toggleState === 4 ? "content  active-content" : "content"}>
                <h3>Content 3</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam dignissimos reprehenderit quam mollitia officia, quo vel, incidunt suscipit minima rem ipsum accusantium nihil ab cum harum, ducimus est quis.
                </p>
            </div>
            <div className={toggleState === 5 ? "content  active-content" : "content"}>
                <h3>Content 4</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam dignissimos reprehenderit quam mollitia officia, quo vel, incidunt suscipit minima rem ipsum accusantium nihil ab cum harum, ducimus est quis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Tabs