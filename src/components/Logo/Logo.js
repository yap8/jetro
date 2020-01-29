import React from 'react'
import './Logo.scss'

const Logo = () => {
  return (
    <a href="index.html" className="logo">
      <div className="logo__text">
        <div className="logo__text-part">Jet</div>
        <div className="logo__text-part logo__text-part--highlighted">ro</div>
      </div>
    </a>
  )
}

export default Logo
