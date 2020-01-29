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
      <ul className="carousel__list">
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageOne})`}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide one</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageTwo})`, display: 'none'}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide two</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageThree})`, display: 'none'}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide three</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageFour})`, display: 'none'}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide four</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageFive})`, display: 'none'}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide five</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
        <li className="carousel__list-item" style={{backgroundImage: `url(${slideImageSix})`, display: 'none'}}>
          <div className="carousel__list-item-content">
            <h4 className="carousel__list-item-content-title">Slide six</h4>
            <div className="carousel__list-item-content-text">
              <p className="carousel__list-item-content-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="carousel__controls">
        <button className="carousel__controls-button carousel__controls-button--prev">
          <span className="carousel__controls-button-icon">
            <ArrowIcon />
          </span>
        </button>
        <button className="carousel__controls-button carousel__controls-button--next">
          <span className="carousel__controls-button-icon carousel__controls-button-icon--rotated">
            <ArrowIcon />
          </span>
        </button>
      </div>
      <div className="carousel__thumbnails"></div>
    </div>
  )
}

export default Carousel
