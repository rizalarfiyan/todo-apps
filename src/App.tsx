import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import LoadingScreen from '@components/LoadingScreen'

import queryClient from '@libs/react-query'

import BaseProvider from '@providers/BaseProvider'

import router from './routes'

function App() {
  return (
    <Suspense fallback={<LoadingScreen reason='Initial app' />}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
        <BaseProvider>
          <RouterProvider
            router={router}
            fallbackElement={<LoadingScreen reason='Loading routes' />}
          />
        </BaseProvider>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
