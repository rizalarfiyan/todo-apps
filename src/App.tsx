import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import LoadingScreen from '@components/LoadingScreen'

import router from './routes'

function App() {
  return (
    <Suspense fallback={<LoadingScreen reason='Initial app' />}>
      <RouterProvider
        router={router}
        fallbackElement={<LoadingScreen reason='Loading routes' />}
      />
    </Suspense>
  )
}

export default App
