import React from 'react'
import './Carousel.scss'

import slideImageOne from '../../images/slides/image-1.jpg'
import slideImageTwo from '../../images/slides/image-2.jpg'
import slideImageThree from '../../images/slides/image-3.jpg'
import slideImageFour from '../../images/slides/image-4.jpg'
import slideImageFive from '../../images/slides/image-5.jpg'
import slideImageSix from '../../images/slides/image-6.jpg'

import { ReactComponent as ArrowIcon } from '../../images/svg/arrow.svg'

const Carousel = () => {
  return (
    <div className="carousel">
      <ul className="carousel__list" id="carousel-list">
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageOne})`}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide one</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageTwo})`}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide two</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageThree})`}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide three</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageFour})`}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide four</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageFive})`}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide five</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageSix})`}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide six</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="carousel__controls">
        <button className="carousel__controls-button carousel__controls-button--prev" id="carousel-button-prev">
          <span className="carousel__controls-button-icon">
            <ArrowIcon />
          </span>
        </button>
        <button className="carousel__controls-button carousel__controls-button--next" id="carousel-button-next">
          <span className="carousel__controls-button-icon carousel__controls-button-icon--rotated">
            <ArrowIcon />
          </span>
        </button>
      </div>
      <div className="carousel__thumbnails" id="carousel-thumbnails"></div>
    </div>
  )
}

export default Carousel
