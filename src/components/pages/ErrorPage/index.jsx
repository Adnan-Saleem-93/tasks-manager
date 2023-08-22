import {useRouteError} from 'react-router-dom'
import ErrorTemplate from '../../templates/ErrorTemplate'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <ErrorTemplate
      mainText="Sorry, an unexpected error has occured."
      errorDescription={error.statusText || error.message}
    />
  )
}
