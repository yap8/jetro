import React from 'react'
import { NavLink } from 'react-router-dom'
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
        <li className="nav__list-item">
          <NavLink exact to="/" activeClassName="nav__list-item-link--active" className="nav__list-item-link">Home</NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/about" activeClassName="nav__list-item-link--active" className="nav__list-item-link">About us</NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/blog" activeClassName="nav__list-item-link--active" className="nav__list-item-link">Blog</NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/portfolio" activeClassName="nav__list-item-link--active" className="nav__list-item-link">Portfolio</NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/contact" activeClassName="nav__list-item-link--active" className="nav__list-item-link">Contact us</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
