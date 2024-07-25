import React from 'react'
import aboutImg from '../../assets/img/about-img.jpg';
import './about.css';

function About() {
  return (
<section className="about" id="about">
    <div className="about__grid container grid">
        <div className="about__img-wrapper">
            <img src={aboutImg} alt="" className="about__img" />
        </div>

        <div className="about__content">
            <h2 className="section__title title-right" data-title='About Us'>
            Your Coffee, Made Live Before Your Eyes
            </h2>

            <p className="about__description">
            Welcome to Brew Haven, where every cup tells a story. 
            Nestled in the heart of the city, our cozy coffee shop offers a haven for coffee enthusiasts and 
            casual sippers alike. With a warm, inviting ambiance,it's the perfect spot to relax,
            catch up with friends, or enjoy some quiet time with
            a good book.
            </p>

        </div>






    </div>
</section>
  )
}

export default About