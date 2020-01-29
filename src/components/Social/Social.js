import React from 'react'
import './Social.scss'

import facebookIcon from '../../images/social/facebook.png'
import twitterIcon from '../../images/social/twitter.png'
import emailIcon from '../../images/social/email.png'
import rssIcon from '../../images/social/rss.png'
import vimeoIcon from '../../images/social/vimeo.png'

const Social = () => {
  return (
    <ul className="social">
      <li className="social__item">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social__link">
          <img src={facebookIcon} alt="Facebook" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="social__link">
          <img src={twitterIcon} alt="Twitter" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="mailto:information@jetro.com" className="social__link">
          <img src={emailIcon} alt="Email" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="index.html" className="social__link">
          <img src={rssIcon} alt="RSS" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://www.vimeo.com/" target="_blank" rel="noopener noreferrer" className="social__link">
          <img src={vimeoIcon} alt="Vimeo" className="social__icon" />
        </a>
      </li>
    </ul>
  )
}

export default Social
