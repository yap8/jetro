import React from 'react'
import './TwitterWidget.scss'

const TwitterWidget = () => {
  return (
    <ul className="twitter-widget">
      <li className="twitter-widget__item">
        <a href="https://twitter.com/cats_cursed" target="_blank" rel="noopener noreferrer" className="twitter-widget__username">@pixelmater</a>
        <div className="twitter-widget__text">What an awesome design with great functionality :)</div>
        <a href="https://twitter.com/cats_cursed/status/1220356298815963137" target="_blank" rel="noopener noreferrer" className="twitter-widget__date">about 1 hour ago</a>
      </li>
      <li className="twitter-widget__item">
        <a href="https://twitter.com/cats_cursed" target="_blank" rel="noopener noreferrer" className="twitter-widget__username">@designdude</a>
        <div className="twitter-widget__text">What an awesome design with great functionality :)</div>
        <a href="https://twitter.com/cats_cursed/status/1220718770966224896" target="_blank" rel="noopener noreferrer" className="twitter-widget__date">about 1 hour ago</a>
      </li>
    </ul>
  )
}

export default TwitterWidget
