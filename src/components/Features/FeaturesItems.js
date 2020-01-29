import React from 'react'
import './FeaturesItems.scss'

import FeaturesItem from './FeaturesItem'

import { ReactComponent as GearIcon } from '../../images/svg/gear.svg'
import { ReactComponent as CheckIcon } from '../../images/svg/check.svg'
import { ReactComponent as PersonIcon } from '../../images/svg/person.svg'

const FeaturesItems = () => {
  const items = [
    {
      image: <GearIcon />,
      title: 'Check out my latest portfolio items',
      text: 'Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.',
      link: 'https://github.com/arsenyNebozhenko'
    },
    {
      image: <CheckIcon />,
      title: 'Offer Top Notch Quality Work & Services',
      text: 'Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.',
      link: 'https://github.com/arsenyNebozhenko'
    },
    {
      image: <PersonIcon />,
      title: 'Follow Me on Twitter, Facebook & Pinterest',
      text: 'Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.',
      link: 'https://github.com/arsenyNebozhenko'
    }
  ]

  return (
    <ul className="features-items">
      { items.map((item, index) =>
        <FeaturesItem 
          key={index}
          image={item.image}
          title={item.title} 
          text={item.text} 
          link={item.link}
        />
      )}
    </ul>
  )
}

export default FeaturesItems
