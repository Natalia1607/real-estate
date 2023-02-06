import React, { useState } from 'react';
import './formContainerStyles.css';

import Key from '../../assets/key.jpg';

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';

const SignInContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((useCredential) => { 
      console.log(useCredential);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const appearance = () => {
    const el = document.querySelector('#form__opacity');
    el.style.opacity = 1;
  };
  return (
    <div className='container form__container grid'>
    <div className='form__bg md-flex'><img src={Key} alt="key" /></div>
      <div className="form__right sign__right">
        <h2 className='mb36'>Sign in</h2> {/* Login In to your Account */}
        <button className='btn flex ai-c gap_6'><FcGoogle size={22}/>Continue with Google</button><br/>
        <button className='btn flex ai-c gap_6 mb24' onClick={appearance}><MdEmail color='#1976d2' size={22}/>Continue with Email</button>
        <form action="#" className='form' id='form__opacity' onSubmit={signIn}>
            <div className="form__data sign__data flex jc-sb gap mb36">
                <div className="input-wrap">
                  <label>Email</label><br />
                  <input 
                    type="email" 
                    className='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-wrap">
                  <label>Password</label><br />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
            </div>
            <button className='btn btn-primary' type='submit'>Sign in</button>
        </form>
        </div>
    </div>
  )
}

export default SignInContainer