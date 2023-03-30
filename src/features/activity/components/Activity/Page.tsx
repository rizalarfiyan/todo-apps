import React from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import Empty from './Empty'

const Page = () => {
  return (
    <div className='container space-y-20'>
      <div className='flex items-center justify-between gap-3'>
        <h1 className='text-4xl font-semibold text-gray-800'>Activity</h1>
        <Button
          type='button'
          leftIcon={<Icon type='plus' className='mr-2 h-5 w-5' />}
          variant='solid'
          color='primary'
          size='lg'
          isRounded
        >
          Add
        </Button>
      </div>
      <Empty className='mx-auto h-auto w-full max-w-xl' />
    </div>
  )
}

export default Page
