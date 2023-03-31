import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from '@components/Error'

import BaseLayout from '@layouts/BaseLayout'

import ActivityRoutes from '@features/activity'

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [...ActivityRoutes],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
