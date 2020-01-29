import React from 'react'
import './Carousel.scss'

import CarouselSlides from './CarouselSlides'
import CarouselControls from './CarouselControls'
import CarouselThumbnails from './CarouselThumbnails'

const Carousel = () => {
  return (
    <div className="carousel">
      <CarouselSlides />
      <CarouselControls />
      <CarouselThumbnails />
    </div>
  )
}

export default Carousel
