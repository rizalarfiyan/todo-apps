import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import BaseLayout from '@layouts/BaseLayout'

import ActivityRoutes from '@features/activity'

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [...ActivityRoutes],
  },
  {
    path: '*',
    element: (
      <div className='flex min-h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-semibold text-gray-800'>Not Found</h1>
      </div>
    ),
  },
])

export default router
