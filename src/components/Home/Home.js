import React from 'react'

import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import PageTitle from '../PageTitle/PageTitle'
import Works from '../Works/Works'

const Home = () => {
  return (
    <>
      <PageTitle title={'home'} isHidden={true} />
      <Hero />
      <Features />
      <Works />
    </>
  )
}

export default Home
