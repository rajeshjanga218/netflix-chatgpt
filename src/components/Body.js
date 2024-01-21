import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ])

  return <RouterProvider router={appRouter} />
}

export default Body
