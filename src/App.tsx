import React, { Suspense } from 'react'

import LoadingScreen from '@components/LoadingScreen'
import Spinner from '@components/Spinner'

function App() {
  return (
    <Suspense fallback={<LoadingScreen reason='Initial app' />}>
      <div className='flex min-h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-semibold text-gray-800'>Todo Apps</h1>
        <Spinner />
      </div>
    </Suspense>
  )
}

export default App
