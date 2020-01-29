import React, { Fragment } from 'react'

import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import PageTitle from '../PageTitle/PageTitle'
import Works from '../Works/Works'

const Home = () => {
  return (
    <Fragment>
      <PageTitle />
      <Hero />
      <Features />
      <Works />
    </Fragment>
  )
}

export default Home
