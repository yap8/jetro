import React from 'react'
import './Header.scss'

import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__nav">
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
