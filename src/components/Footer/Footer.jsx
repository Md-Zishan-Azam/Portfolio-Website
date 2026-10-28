import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo}/>
          <p>I am a devops engineer, with over 1+ year of experience with proficiency in full-stack applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon}/>
            <input type="email" placeholder='Enter your email'/>
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2026 Zishan Malik. All Rights Reserved</p>
        <div className="footer-bottom-right">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
