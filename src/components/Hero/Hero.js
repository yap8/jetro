import React from 'react'
import './Hero.scss'

import Carousel from '../Carousel/Carousel'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__carousel">
          <Carousel />
        </div>
      </div>
    </section>  
  )
}

export default Hero
