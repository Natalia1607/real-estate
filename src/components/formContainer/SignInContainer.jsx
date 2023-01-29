import React from 'react';
import './formContainerStyles.css';

const SignInContainer = () => {
  return (
    <div className='container form__container'>
    <div className='form__bg'></div>
      <div className="form__right sign__right">
        <h2>Sign in</h2> 
        <form action="#" className='form'>
            <div className="form__data sign__data">
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