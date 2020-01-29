import React from 'react'
import './CarouselSlide.scss'

const CarouselSlide = ({ index, image, title, text }) => {
  const style = index > 0 ? {
    display: 'none'
  } : {
    backgroundImage: `url(${image})`
  }

  return (
    <div className="carousel-slide" style={style}>
      <div className="carousel-slide__content">
        <h4 className="carousel-slide__title">{title}</h4>
        <div className="carousel-slide__text">{text}</div>
      </div>
    </div>
  )
}

export default CarouselSlide
