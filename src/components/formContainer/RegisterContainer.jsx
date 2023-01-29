import React from 'react';
import { Link } from 'react-router-dom';
import './formContainerStyles.css';

const RegisterContainer = () => {
  return (
    <div className='container form__container'>
      <div className='form__bg'></div>
      <div className="form__right register__right">
        <p>Already a member?<Link to={'/sign-in'}> Sign In</Link></p>
        <h2>Register</h2>
        <form action="#" className='form'>
            <div className="form__data register__data">
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
                  <input type="tel" />
                </div>
                <div className="input-wrap">
                  <label>Password</label><br />
                  <input type="password" />
                </div>
            </div>
            <label className = "checkbox">
              <input type="checkbox" className="checkbox__input" />
              <p className ='checkbox__text '>Creating an account means you agree to our <a href="#"> Terms of Service</a>, <a href="#"> Privacy Policy</a>, and our default <a href="#"> Notification Settings</a>.</p>
            </label>
            <button className='btn btn-primary' type='submit'>Create Account</button>
        </form>
        </div>
    </div>
  )
}

export default RegisterContainer
