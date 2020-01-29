import React from 'react'
import './InnerContainer.scss'

const InnerContainer = ({className, children}) => {
  const finalClassName = className ? `${className} container` : 'container'

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}

export default InnerContainer
