import React from 'react'
import './Works.scss'

import WorksItems from '../WorksItems/WorksItems'

const Works = () => {
  return (
    <section className="works">
      <div className="works__inner container">
        <h2 className="works__title">Recent works</h2>
        <div className="works__items">
          <WorksItems />
        </div>
      </div>
    </section>
  )
}

export default Works
