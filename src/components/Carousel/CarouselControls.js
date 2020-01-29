import React from 'react'
import './CarouselControls.scss'

import { ReactComponent as ArrowIcon } from '../../images/svg/arrow.svg'

const CarouselControls = () => {
  return (
    <div className="carousel-controls">
      <button className="carousel-controls__button carousel-controls__button--prev">
        <span className="carousel-controls__icon">
          <ArrowIcon />
        </span>
      </button>
      <button className="carousel-controls__button carousel-controls__button--next">
        <span className="carousel-controls__icon carousel-controls__icon--rotated">
          <ArrowIcon />
        </span>
      </button>
    </div>
  )
}

export default CarouselControls
