import React from 'react'
import './Footer.scss'

import Social from '../Social/Social'
import TwitterWidget from '../TwitterWidget/TwitterWidget'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__col">
          <h4 className="footer__col-title">About jetro</h4>
          <div className="footer__col-text">
            <p className="footer__col-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. Id mei vitae denique, in eam commodo veritus disputando. </p>
            <p className="footer__col-text-paragraph">Pro et erant delicata, eu vim essent imperdiet accommodare, dictas deseruisse ius an. Solet everti definitionem id ius, sonet oporteat cu vim.</p>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Twitter widget</h4>
          <div className="footer__twitter-widget">
            <TwitterWidget />
          </div>
          <div className="footer__follow">Follow <a href="#" className="footer__follow-link">@bestpsdfreebies</a></div>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">Contact us</h4>
          <div className="footer__col-text">
            <p className="footer__col-text-paragraph">Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. </p>
            <p className="footer__col-text-paragraph footer__col-text-paragraph--no-margin">information@jetro.com</p>
            <p className="footer__col-text-paragraph">1.222.333.4444</p>
          </div>
          <div className="footer__social">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
