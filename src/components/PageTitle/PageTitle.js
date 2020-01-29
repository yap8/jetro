import React from 'react'
import './PageTitle.scss'
import InnerContainer from '../InnerContainer/InnerContainer'

const PageTitle = ({title, isHidden}) => {
  const finalClassName = isHidden ? 'page-title page-title--hidden' : 'page-title'
  return (
    <section className={finalClassName}>
      <InnerContainer className="page-title__inner">
        <h1 className="page-title__title">{title}</h1>
      </InnerContainer>
    </section>
  )
}

export default PageTitle
