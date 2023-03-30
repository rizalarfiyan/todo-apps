import React from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import useActivityList from '@features/activity/services/useGetActivityList'

import Empty from './Empty'

import { ACTIVITY_GROUP } from '@/constants'

const Page = () => {
  const { data, error, isLoading, isError } = useActivityList({
    email: ACTIVITY_GROUP,
  })

  const isEmpty = data?.data.length === 0

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
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error... {JSON.stringify(error)}</div>
      ) : isEmpty ? (
        <Empty className='mx-auto h-auto w-full max-w-xl' />
      ) : (
        JSON.stringify(data)
      )}
    </div>
  )
}

export default Page
