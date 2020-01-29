import React from 'react'
import './FeaturesItem.scss'

const FeaturesItem = ({ image, title, text, link }) => {
  return (
    <li className="features-item">
      <div className="features-item__header">
        <div className="features-item__icon">{image}</div>
        <h4 className="features-item__title">{title}</h4>
      </div>
      <div className="features-item__text">{text}</div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="features-item__button">More</a>
    </li>
  )
}

export default FeaturesItem
