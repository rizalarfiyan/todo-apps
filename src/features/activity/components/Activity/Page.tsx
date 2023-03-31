import React from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import useCreateActivity from '@features/activity/services/useCreateActivity'
import useActivityList from '@features/activity/services/useGetActivityList'

import Empty from './Empty'

import { ACTIVITY_GROUP } from '@/constants'

const Page = () => {
  const activityList = useActivityList({
    email: ACTIVITY_GROUP,
  })

  const createActivity = useCreateActivity()

  const isEmpty = activityList.data?.data.length === 0

  const handleCrateActivity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    createActivity.mutateAsync({
      data: {
        email: ACTIVITY_GROUP,
        title: 'Test',
      },
    })
  }

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
          onClick={handleCrateActivity}
          isLoading={createActivity.isLoading}
        >
          Add
        </Button>
      </div>
      {activityList.isLoading ? (
        <div>Loading...</div>
      ) : activityList.isError ? (
        <div>Error... {JSON.stringify(activityList.error)}</div>
      ) : isEmpty ? (
        <Empty className='mx-auto h-auto w-full max-w-xl' />
      ) : (
        JSON.stringify(activityList.data)
      )}
    </div>
  )
}

export default Page
