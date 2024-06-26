import React from 'react';
import  './Footer.css'
import footer_logo from '../Assets/logo.jpeg'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPING</p>

        </div>
        <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/offices">Offices</a></li>
            <li><a href="/contact">Contact</a></li>

        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ LEGEND 2024 - All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Footer;