import React from 'react'
import './Header.scss'

import InnerContainer from '../InnerContainer/InnerContainer'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header className="header">
      <InnerContainer className="header__inner">
        <Logo />
        <Nav />
      </InnerContainer>
    </header>
  )
}

export default Header
