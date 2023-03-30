import React from 'react'

import Icon from '@components/Icon'

const Page = () => {
  return (
    <>
      <div className='flex min-h-screen w-full items-center justify-center'>
        <div className='flex items-center gap-3'>
          <h1 className='text-4xl font-semibold text-gray-800'>
            Activity Page 1
          </h1>
          <Icon className='text-gray-500' type='pencil' />
        </div>
      </div>
      <div className='flex min-h-screen w-full items-center justify-center'>
        <h1 className='text-4xl font-semibold text-gray-800'>
          Activity Page 2
        </h1>
      </div>
    </>
  )
}

export default Page
