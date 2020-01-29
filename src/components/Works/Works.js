import React from 'react'
import './Works.scss'

import WorksItems from './WorksItems'
import InnerContainer from '../InnerContainer/InnerContainer'

const Works = () => {
  return (
    <section className="works">
      <InnerContainer className="works__inner">
        <h2 className="works__title">Recent works</h2>
        <WorksItems />
      </InnerContainer>
    </section>
  )
}

export default Works
