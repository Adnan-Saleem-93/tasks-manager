import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoadingPage from './components/pages/LoadingPage'

const TasksPage = lazy(() => import('./components/pages/TasksPage/index.jsx'))
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage/index.jsx'))
const ErrorPage = lazy(() => import('./components/pages/ErrorPage/index.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TasksPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingPage />}>
        <ErrorPage />
      </Suspense>
    )
  },
  {
    path: '/tasks',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TasksPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingPage />}>
        <ErrorPage />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <NotFoundPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingPage />}>
        <ErrorPage />
      </Suspense>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
)
