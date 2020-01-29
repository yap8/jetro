import React from 'react'
import './WorksItems.scss'
import WorksItem from './WorksItem'

import imageOne from '../../images/works/img.jpg'
import imageTwo from '../../images/works/img-2.jpg'
import imageThree from '../../images/works/img-3.jpg'
import imageFour from '../../images/works/img-4.jpg'

const WorksItems = () => {
  const items = [
    {
      link: 'https://github.com/arsenyNebozhenko',
      image: imageOne,
      title: 'Character design',
      date: 'June 15, 2012'
    },
    {
      link: 'https://github.com/arsenyNebozhenko',
      image: imageTwo,
      title: 'Character design',
      date: 'June 15, 2012'
    },
    {
      link: 'https://github.com/arsenyNebozhenko',
      image: imageThree,
      title: 'Character design',
      date: 'June 15, 2012'
    },
    {
      link: 'https://github.com/arsenyNebozhenko',
      image: imageFour,
      title: 'Character design',
      date: 'June 15, 2012'
    },
  ]

  return (
    <ul className="works-items">
      { items.map((item, index) => <WorksItem key={index} item={item} />) }
    </ul>
  )
}

export default WorksItems
