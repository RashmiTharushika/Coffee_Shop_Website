import React from 'react'
import sideImg from '../../assets/img/shape-2.png';
import {testimonial} from '../../assets/Data';
import { IoIosStar } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import './testimonial.css';


const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(maxRating)].map((_, index) => (
        <IoIosStar
          key={index}
          size={24}
          color={index < rating ? 'gold' : 'gray'}
        />
      ))}
    </div>
  );
};

function Testimonial() {
  return (
<section className="testimonial" id="testimonial">
    <h2 className="section__title" data-title="Testimonials">
    Awesome Reviews of Our Customer
    </h2>



    <Swiper
    spaceBetween={30}
    pagination={{clickable: true}} 
    modules={[Pagination]} 
    className="container">

        {testimonial.map(({img, title,service,description,rating},index) =>{
            return(
                <SwiperSlide className="testimonial__item" key={index}>
                        <div className="testimonial__img-wrapper">
                            <img src={img} alt="" className="testimonial__img" />
                        </div>

                        <div className='testimonial__content'>

                            <h3 className="testimonial__title">{title}</h3>
                            <p className="testimonial__service">{service}</p>
                            <p className="testimonial__description">{description}</p>
                            <img src={sideImg} alt="" className="testimonial__side-img" />
                            <div className="testimonial__reviews">
                            <StarRating rating={rating}/>
                            </div>

                        </div>
             
                </SwiperSlide>
            )
        })}
            </Swiper>

</section>

  )
}

export default Testimonial