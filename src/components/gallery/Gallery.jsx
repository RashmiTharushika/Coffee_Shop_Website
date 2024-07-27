import React from 'react'
import { gallery } from '../../assets/Data';
import { BsPlusCircleFill } from "react-icons/bs";
import './gallery.css';

function Gallery() {
  return (
<section className="gallery" id="gallery">
    <h2 className="section__title" data-title="Our Gallery">
    Where Every Cup Tells a Story  
    </h2>

    <div className="gallery__grid container grid">
        {gallery.map(({img,title},index) =>{
            return(
                <div className="gallery__item" key={index}>
                    <img src={img} alt="" className="gallery__img" />

                    <a href="/" className="gallery__icon"><BsPlusCircleFill className='gallery__icon--plus_circle'/></a>

                    <h3 className="gallery__title">{title}</h3>
                </div>
            )
        })}
    </div>


</section>
  )
}

export default Gallery