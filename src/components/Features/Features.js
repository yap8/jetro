import React from 'react'
import './Features.scss'

import InnerContainer from '../InnerContainer/InnerContainer'
import FeaturesItems from './FeaturesItems'

const Features = () => {
  return (  
    <section className="features">
      <InnerContainer className="features__inner">
        <FeaturesItems />
      </InnerContainer>
    </section>
  )
}

export default Features
