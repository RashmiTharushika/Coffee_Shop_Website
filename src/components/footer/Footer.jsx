import React from 'react'
import logo from '../../assets/img/logo.png';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
<section className="footer" id="footr">

<div className="footer__grid container grid">

    <div className="footer__left">
        <h3 className='footer__title'>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    
    <div className="footer__middle">
        <img src={logo} alt="" className='footer__logo'/>
    </div>

    <div className="footer_right">
        <h3 className='footer__title'>Contact With Us</h3>
            <div className="footer__socials">
                <a href="/" className="footer__social-links">
                <FaFacebookF/>
                </a>

                <a href="/" className="footer__social-links">
                <FaTwitter/>
                </a>


                <a href="/" className="footer__social-links">
                <FaYoutube/>
                </a>
            </div>

    </div>

</div>

<p className="footer__bottom">
&copy;2024 Brew Haven.All Right Reserved.
</p>

</section>
  )
}

export default Footer