import React from 'react'

import Spinner from '@components/Spinner'

function App() {
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <h1 className='text-4xl font-semibold text-gray-800'>Todo Apps</h1>
      <Spinner />
    </div>
  )
}

export default App
