import React from 'react'
import {menu} from '../../assets/Data';
import { FaArrowRight } from "react-icons/fa";
import './menu.css';

function Menu() {
  return (
<section className="menu" id="menu">
      <h2 className="section__title" data-title='Menu'>
          Let's Check Our Menu
      </h2>


    <div className="menu__grid container grid">
      {menu.map(({ img, title, description, price }, index) => {
        let itemClass = '';
        if (index % 3 === 0) {
          itemClass = 'color-group-1'; // 1st and 4th items
        } else if (index % 3 === 1) {
          itemClass = 'color-group-2'; // 2nd and 5th items
        } else if (index % 3 === 2) {
          itemClass = 'color-group-3'; // 3rd and 6th items
        }
        
        return (
          <div className={`menu__item grid ${itemClass}`} key={index}>
            <div className="menu__img-wrapper">
              <img src={img} alt="" className="menu__img" />
            </div>

            <div className="menu__data">
              <div className="menu__data-grid">
                <div>
              <div>
                <h3 className="menu__title">{title}</h3>
                <p className="menu__description">{description}</p>
              </div>

              <div>
                <span className="menu__price">${price}</span>
              </div>
              </div>

              <div>
              <div className="menu__btns">
                <a href="" className="menu__btn">Buy Now</a>
              </div>
              </div>
          </div>       
            </div>
          </div>
        );
      })}
    </div>

        <div className="menu__more">
          <a href="" className="menu__btn-more">Our Products<FaArrowRight/></a>
        </div>  


    </section>
  )
}

export default Menu