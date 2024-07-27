import React from 'react'
import offerImg from '../../assets/img/offer-bg.jpg';
import './offer.css';

function Offer() {
  return (
<section className="offer" id="offer">
        <h2 className="section__title" data-title='Offers'>
        Special Offers on Your Favorites
        </h2>

        
        <div className="offer-img-container">
          <img src={offerImg} alt="" className="offer-bg" />

            <div className='offer__content'>
              <h1 className="offer__title">
                Get 10% Discount for Your <br /> First Purchase
              </h1>

            <div className="offer__detail">
              <span className="offer__textbox">
                <input type="text" placeholder='Enter Your E-mail' />
              </span>

              <div className="offer__btns">
                <a href="" className="offer__btn">Order Now</a>
              </div>
            </div>


          
        </div>
        </div>
    </section>
  )
}

export default Offer