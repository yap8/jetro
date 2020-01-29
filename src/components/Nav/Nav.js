import React from 'react'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <button className="nav__toggle-button" id="nav-toggle-button">
        <span className="nav__toggle-button-particle"></span>
        <span className="nav__toggle-button-particle"></span>
        <span className="nav__toggle-button-particle"></span>
      </button>
      <ul className="nav__list" id="nav-list">
        <li className="nav__list-item"><a href="index.html" className="nav__list-item-link nav__list-item-link--active">Home</a></li>
        <li className="nav__list-item"><a href="about.html" className="nav__list-item-link">About us</a></li>
        <li className="nav__list-item"><a href="blog.html" className="nav__list-item-link">Blog</a></li>
        <li className="nav__list-item"><a href="portfolio.html" className="nav__list-item-link">Portfolio</a></li>
        <li className="nav__list-item"><a href="contact.html" className="nav__list-item-link">Contact us</a></li>
      </ul>
    </nav>
  )
}

export default Nav
