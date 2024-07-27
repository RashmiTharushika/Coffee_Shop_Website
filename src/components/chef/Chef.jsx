import React from 'react'
import chef1 from '../../assets/img/chef1.jpg';
import chef2 from '../../assets/img/chef2.jpg';
import chef3 from '../../assets/img/chef3.jpg';
import chef4 from '../../assets/img/chef4.jpg';
import chef5 from '../../assets/img/chef5.jpg';
import videoFile from '../../assets/img/video.mp4';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './chef.css';

function Chef() {
  return (
<section className="chef" id="chef">

<h2 className="section__title" data-title="Our Experts" id='chef__experts'>
         Meet the Masters Behind Your Brew        
        </h2>

    {/* -------------------------------------------- */}

    <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
{/* ======================= */}


    <div className="chef__grid container grid">

        {/* -------------chef 01------------- */}

    <div className="chef__item">

        <img src={chef1} alt="" className="chef__img" />

        <div className="chef__data">
                <h3 className="chef__title">Jack Harrison</h3>
                <p className="chef__job">Senior Chef</p>
         </div>

         <div className="chef__socials">
                <a href="/" className="chef__social-links">
                <FaFacebookF/>
                </a>

                <a href="/" className="chef__social-links">
                <FaTwitter/>
                </a>

                <a href="/" className="chef__social-links">
                <FaLinkedinIn/>
                </a>

                <a href="/" className="chef__social-links">
                <FaYoutube/>
                </a>
            </div>

    </div>


        {/* -------------chef 02------------- */}

    <div className="chef__item">

<       img src={chef2} alt="" className="chef__img" />

        <div className="chef__data">
            <h3 className="chef__title">Daniel Harrison</h3>
            <p className="chef__job">Senior Chef</p>
        </div>

        <div className="chef__socials">
                <a href="/" className="chef__social-links">
                <FaFacebookF/>
                </a>

                <a href="/" className="chef__social-links">
                <FaTwitter/>
                </a>

                <a href="/" className="chef__social-links">
                <FaLinkedinIn/>
                </a>

                <a href="/" className="chef__social-links">
                <FaYoutube/>
                </a>
            </div>

    </div>


        {/* -------------chef 03------------- */}

    <div className="chef__item">

        <img src={chef3} alt="" className="chef__img" />

        <div className="chef__data">
            <h3 className="chef__title">Emma Parker</h3>
            <p className="chef__job">Senior Chef</p>
        </div>

        <div className="chef__socials">
                <a href="/" className="chef__social-links">
                <FaFacebookF/>
                </a>

                <a href="/" className="chef__social-links">
                <FaTwitter/>
                </a>

                <a href="/" className="chef__social-links">
                <FaLinkedinIn/>
                </a>

                <a href="/" className="chef__social-links">
                <FaYoutube/>
                </a>
            </div>


    </div>

        {/* -------------chef 04------------- */}

    <div className="chef__item">

        <img src={chef4} alt="" className="chef__img" />

<       div className="chef__data">
            <h3 className="chef__title">Ethan Collins</h3>
            <p className="chef__job">Senior Chef</p>
        </div>

        <div className="chef__socials">
                <a href="/" className="chef__social-links">
                <FaFacebookF/>
                </a>

                <a href="/" className="chef__social-links">
                <FaTwitter/>
                </a>

                <a href="/" className="chef__social-links">
                <FaLinkedinIn/>
                </a>

                <a href="/" className="chef__social-links">
                <FaYoutube/>
                </a>
            </div>


    </div>

        {/* -------------chef 05------------- */}

    <div className="chef__item">

        <img src={chef5} alt="" className="chef__img" />

        <div className="chef__data">
            <h3 className="chef__title">Olivia Thompson</h3>
            <p className="chef__job">Senior Chef</p>
        </div>

        <div className="chef__socials">
                <a href="/" className="chef__social-links">
                <FaFacebookF/>
                </a>

                <a href="/" className="chef__social-links">
                <FaTwitter/>
                </a>

                <a href="/" className="chef__social-links">
                <FaLinkedinIn/>
                </a>

                <a href="/" className="chef__social-links">
                <FaYoutube/>
                </a>
            </div>


    </div>


      </div>


{/* ===================================== */}
    </div>

    {/* ----------------------------------------------------- */}





    </div>
</section>
  )
}

export default Chef