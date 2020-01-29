import React from 'react'
import './WorksItems.scss'

import imageOne from '../../images/works/img.jpg'
import imageTwo from '../../images/works/img-2.jpg'
import imageThree from '../../images/works/img-3.jpg'
import imageFour from '../../images/works/img-4.jpg'

const WorksItems = () => {
  return (
    <ul className="works-items">
      <li className="works-items__item">
        <a href="https://github.com/arsenyNebozhenko" target="_blank" className="works-items__item-link">
          <div className="works-items__item-image-wrapper">
            <img src={imageOne} alt="Work" className="works-items__item-image" />
          </div>
          <div className="works-items__item-description">
            <h4 className="works-items__item-title">Character design</h4>
            <div className="works-items__item-date">June 15, 2012</div>
          </div>
        </a>
      </li>
      <li className="works-items__item">
        <a href="https://github.com/arsenyNebozhenko" target="_blank" className="works-items__item-link">
          <div className="works-items__item-image-wrapper">
            <img src={imageTwo} alt="Work" className="works-items__item-image" />
          </div>
          <div className="works-items__item-description">
            <h4 className="works-items__item-title">Brochure design</h4>
            <div className="works-items__item-date">June 15, 2012</div>
          </div>
        </a>
      </li>
      <li className="works-items__item">
        <a href="https://github.com/arsenyNebozhenko" target="_blank" className="works-items__item-link">
          <div className="works-items__item-image-wrapper">
            <img src={imageThree} alt="Work" className="works-items__item-image" />
          </div>
          <div className="works-items__item-description">
            <h4 className="works-items__item-title">Social media buttons</h4>
            <div className="works-items__item-date">June 15, 2012</div>
          </div>
        </a>
      </li>
      <li className="works-items__item">
        <a href="https://github.com/arsenyNebozhenko" target="_blank" className="works-items__item-link">
          <div className="works-items__item-image-wrapper">
            <img src={imageFour} alt="Work" className="works-items__item-image" />
          </div>
          <div className="works-items__item-description">
            <h4 className="works-items__item-title">10 Amazing websites</h4>
            <div className="works-items__item-date">June 15, 2012</div>
          </div>
        </a>
      </li>
    </ul>
  )
}

export default WorksItems
