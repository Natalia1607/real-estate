import React from 'react';
import './formContainerStyles.css';

import Key from '../../assets/key.jpg';

const SignInContainer = () => {
  return (
    <div className='container form__container grid'>
    <div className='form__bg md-flex'><img src={Key} alt="key" /></div>
      <div className="form__right sign__right">
        <h2 className='mb36'>Sign in</h2> 
        <form action="#" className='form'>
            <div className="form__data sign__data flex jc-sb gap mb36">
                <div className="input-wrap">
                  <label>Username</label><br />
                  <input type="text" />
                </div>
                <div className="input-wrap">
                  <label>Password</label><br />
                  <input type="password" />
                </div>
            </div>
            <button className='btn btn-primary' type='submit'>Sign in</button>
        </form>
        </div>
    </div>
  )
}

export default SignInContainer