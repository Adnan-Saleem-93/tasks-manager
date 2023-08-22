import React from 'react'
import ErrorTemplate from '../../templates/ErrorTemplate'

const NotFoundPage = () => {
  return (
    <ErrorTemplate
      mainText="404 - page not found"
      errorDescription="the page you are trying to visit does not exist"
    />
  )
}

export default NotFoundPage
