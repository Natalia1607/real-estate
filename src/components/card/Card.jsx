import React from 'react';
import './cardStyles.css';

import Card from '../../assets/card.jpg';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='card__wrapp'>
        <img className='card__img' src={Card} alt="" />
        <div className='card__data'>
          <h4>Ocean Heights</h4>
          <p>Dubai Marina, Dubai</p>
          <p className='card__data_price'>$850,000</p>
          <hr />
          <div className='card__icons'>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Beds</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>2 <span>Baths</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Levels</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>1256 <span>Sqft</span></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='card__wrapp'>
        <img className='card__img' src={Card} alt="" />
        <div className='card__data'>
          <h4>Ocean Heights</h4>
          <p>Dubai Marina, Dubai</p>
          <p className='card__data_price'>$850,000</p>
          <hr />
          <div className='card__icons'>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Beds</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>2 <span>Baths</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Levels</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>1256 <span>Sqft</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className='card__wrapp'>
        <img className='card__img' src={Card} alt="" />
        <div className='card__data'>
          <h4>Ocean Heights</h4>
          <p>Dubai Marina, Dubai</p>
          <p className='card__data_price'>$850,000</p>
          <hr />
          <div className='card__icons'>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Beds</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>2 <span>Baths</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>3 <span>Levels</span></p>
            </div>
            <div>
              <BsFillPatchCheckFill className='icon' />
              <p>1256 <span>Sqft</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards