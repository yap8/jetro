import React from 'react'
import ReactSiema from 'react-siema'
import './CarouselSlides.scss'

import CarouselSlide from './CarouselSlide'

import slideImageOne from '../../images/slides/image-1.jpg'
import slideImageTwo from '../../images/slides/image-2.jpg'
import slideImageThree from '../../images/slides/image-3.jpg'
import slideImageFour from '../../images/slides/image-4.jpg'
import slideImageFive from '../../images/slides/image-5.jpg'
import slideImageSix from '../../images/slides/image-6.jpg'

const CarouselSlides = () => {
  const slides = [
    {
      image: slideImageOne,
      title: 'Slide one',
      text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
    },
    {
      image: slideImageTwo,
      title: 'Slide two',
      text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
    },
    {
      image: slideImageThree,
      title: 'Slide three',
      text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
    },
    {
      image: slideImageFour,
      title: 'Slide four',
      text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
    },
    {
      image: slideImageFive,
      title: 'Slide five',
      text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
    },
    {
      image: slideImageSix,
      title: 'Slide six',
      text: 'Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.'
    },
  ]

  let slider

  return (
    <div className="carousel-slides">
      <ReactSiema>
        {slides.map((item, index) =>
          <CarouselSlide 
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        )}
      </ReactSiema>
    </div>
  )
}

export default CarouselSlides
