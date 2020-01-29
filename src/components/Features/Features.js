import React from 'react'
import './Features.scss'

import { ReactComponent as GearIcon } from '../../images/svg/gear.svg'
import { ReactComponent as CheckIcon } from '../../images/svg/check.svg'
import { ReactComponent as PersonIcon } from '../../images/svg/person.svg'

const Features = () => {
  return (  
    <section className="features">
      <div className="features__inner container">
        <ul className="features__items">
          <li className="features__item">
            <div className="features__item-header">
              <div className="features__item-icon">
                <GearIcon />
              </div>
              <h4 className="features__item-title">Check out my latest portfolio items</h4>
            </div>
            <div className="features__item-text">
              <p className="features__item-text-paragraph">Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.</p>
            </div>
            <a href="https://github.com/arsenyNebozhenko" target="_blank" className="features__item-button">More</a>
          </li>
          <li className="features__item">
            <div className="features__item-header">
              <div className="features__item-icon">
                <CheckIcon />
              </div>
              <h4 className="features__item-title">Offer Top Notch Quality Work & Services</h4>
            </div>
            <div className="features__item-text">
              <p className="features__item-text-paragraph">Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.</p>
            </div>
            <a href="https://github.com/arsenyNebozhenko" target="_blank" className="features__item-button">More</a>
          </li>
          <li className="features__item">
            <div className="features__item-header">
              <div className="features__item-icon">
                <PersonIcon />
              </div>
              <h4 className="features__item-title">Follow Me on Twitter, Facebook & Pinterest</h4>
            </div>
            <div className="features__item-text">
              <p className="features__item-text-paragraph">Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.</p>
            </div>
            <a href="https://github.com/arsenyNebozhenko" target="_blank" className="features__item-button">More</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features
