import React from 'react';
import { Link } from 'react-router-dom';
import './formContainerStyles.css';

import Table from '../../assets/reg.jpg';

import './mask.js';

const RegisterContainer = () => {
  return (
    <div className='container form__container grid'>
      <div className='form__bg md-flex'><img src={Table} alt="" /></div>
      <div className="form__right register__right">
        <p>Already a member? <Link to={'/sign-in'} className='register__link'>Sign In</Link></p>
        <h2 className='mb36'>Register</h2>
        <form action="#" className='form'>
            <div className="form__data register__data flex jc-sb gap">
                <div className="input-wrap">
                  <label>Name</label><br />
                  <input type="text" />
                </div>
                <div className="input-wrap">
                  <label>Username</label><br />
                  <input type="text" />
                </div>
                <div className="input-wrap">
                  <label>Number</label><br />
                  <input type="tel" className='tel'/>
                </div>
                <div className="input-wrap">
                  <label>Password</label><br />
                  <input type="password" />
                </div>
            </div>
            <label className = "checkbox flex pt12 pb24">
              <input type="checkbox" className="checkbox__input" />
              <p className ='checkbox__text'>Creating an account means you agree to our <a href="#" className='register__link'> Terms of Service</a>, <a href="#" className='register__link'> Privacy Policy</a>, and our default <a href="#" className='register__link'> Notification Settings</a>.</p>
            </label>
            <button className='btn btn-primary' type='submit'>Create Account</button>
        </form>
        </div>
    </div>
  )
}

export default RegisterContainer
