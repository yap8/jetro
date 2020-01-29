import React from 'react'
import './WorksItem.scss'

const WorkItem = ({ item }) => {
  const { link, image, title, date } = item
  
  return (
    <li className="works-item">
      <a href={link} target="_blank" rel="noopener noreferrer" className="works-item__link">
        <div className="works-item__image-wrapper">
          <img src={image} alt="Work" className="works-item__image" />
        </div>
        <div className="works-item__description">
          <h4 className="works-item__title">{title}</h4>
          <div className="works-item__date">{date}</div>
        </div>
      </a>
    </li>
  )
}

export default WorkItem
