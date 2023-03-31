import React from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import { useActivityList, useCreateActivity } from '@features/activity/services'

import Card from './Card'
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
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus modi ducimus saepe praesentium quasi sapiente, pariatur deleniti expedita, dolore, est ipsum laudantium optio.',
      },
    })
  }

  return (
    <div className='container'>
      <div className='flex items-center justify-between gap-3'>
        <h2 className='text-4xl font-semibold text-gray-800'>Activity</h2>
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
          Tambah
        </Button>
      </div>
      <div className='my-20'>
        {activityList.isLoading ? (
          <div>Loading...</div>
        ) : activityList.isError ? (
          <div>Error... {JSON.stringify(activityList.error)}</div>
        ) : isEmpty ? (
          <Empty className='mx-auto h-auto w-full max-w-xl' />
        ) : (
          <div className='flex flex-wrap items-center justify-center gap-5'>
            {activityList.data.data.map((activity) => {
              return <Card key={activity.id} activity={activity} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
