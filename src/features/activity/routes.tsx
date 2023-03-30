import React, { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

import LoadingScreen from '@components/LoadingScreen'

import Activity from './components/Activity'
import DetailActivity from './components/DetailActivity'

import { ROUTE } from '@/constants'

const routes: RouteObject[] = [
  {
    path: ROUTE.activity,
    element: (
      <Suspense fallback={<LoadingScreen reason='Loading activity page' />}>
        <Activity />
      </Suspense>
    ),
  },
  {
    path: ROUTE.detailActivity,
    element: (
      <Suspense
        fallback={<LoadingScreen reason='Loading detail activity page' />}
      >
        <DetailActivity />
      </Suspense>
    ),
  },
]

export default routes
