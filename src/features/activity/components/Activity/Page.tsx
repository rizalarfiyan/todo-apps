import React from 'react'

import Alert from '@components/Alert'
import Button from '@components/Button'
import Icon from '@components/Icon'

import { useNotification } from '@hooks/useNotification'

import { useActivityList, useCreateActivity } from '@features/activity/services'

import { getResultError } from '@utils/base'

import Card from './Card'
import Empty from './Empty'
import Skeleton from './Skeleton'

import { ACTIVITY_GROUP, DEFAULT_ACTIVITY_TITLE } from '@/constants'

const Page = () => {
  const notification = useNotification()
  const createActivity = useCreateActivity()
  const activityList = useActivityList({
    email: ACTIVITY_GROUP,
  })

  const isEmpty = activityList.data?.data.length === 0

  const handleCrateActivity = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    await createActivity
      .mutateAsync({
        data: {
          email: ACTIVITY_GROUP,
          title: DEFAULT_ACTIVITY_TITLE,
        },
      })
      .then(() => {
        notification.success('Activity berhasil dibuat')
      })
      .catch(() => {
        notification.error('Activity gagal dibuat')
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
      <div className='mt-20 pb-20'>
        {activityList.isLoading ? (
          <div className='flex flex-wrap items-center justify-center gap-5'>
            {Array.from({ length: 12 }).map((_, idx) => {
              return <Skeleton key={idx} />
            })}
          </div>
        ) : activityList.isError ? (
          <Alert
            variant='danger'
            message={getResultError(activityList.error)}
          />
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
