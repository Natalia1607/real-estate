import React from 'react';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import './footerStyles.css';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__icons">
        <AiOutlineWhatsApp />
        <AiOutlineMail />
      </div>
      <div className="footer__docs">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="copyright">
        Copyright © 2023 Dillantum.ae. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer