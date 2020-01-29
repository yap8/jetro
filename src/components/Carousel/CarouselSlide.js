import React from 'react'
import './CarouselSlide.scss'

const CarouselSlide = ({ image, title, text }) => {
  return (
    <li className="carousel-slide" style={{backgroundImage: `url(${image})`}}>
      <div className="carousel-slide__content">
        <h4 className="carousel-slide__title">{title}</h4>
        <div className="carousel-slide__text">{text}</div>
      </div>
    </li>
  )
}

export default CarouselSlide
