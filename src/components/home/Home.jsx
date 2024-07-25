import React from 'react'
import './home.css';

function Home() {
  return (
<section className="home" id="home">
    <div className="home__container container">
        <div className="home__content">

          <h3 className="home__subtitle">
            Welcome To Brew Haven!
          </h3>
          <br />

            <h1 className="home__title">
            Start Your Day <br />
            with a Perfect Brew
            </h1>

            <div className="home__btns">
                <a href="" className="btn">Buy Now</a>
            </div>

        </div>
    </div>
</section>
  )
}

export default Home