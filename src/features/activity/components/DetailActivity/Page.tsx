import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import Alert from '@components/Alert'
import Button from '@components/Button'
import Error from '@components/Error'
import Icon from '@components/Icon'

import useDisclosure from '@hooks/useDisclosure'

import { useActivityDetail } from '@features/activity/services'

import { getResultError, isNotFound } from '@utils/base'

import Empty from './Empty'
import SortTodo from './SortTodo'
import TodoModal from './TodoModal'

const Page = () => {
  const { id } = useParams()
  const activityDetail = useActivityDetail(id as string)
  const modal = useDisclosure()

  const handleCreateTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    modal.open()
  }

  const isEmpty = activityDetail.data?.todo_items.length === 0

  if (!id || isNotFound(activityDetail)) {
    return (
      <Error code='404' title='Activity Tidak Ditemukan' className='-mt-36'>
        <div className='mt-2'>
          Activity yang Anda cari tidak ada atau terjadi kesalahan lain. Kembali
          ke{' '}
          <Link to='/' className='text-gray-700 underline'>
            halaman utama
          </Link>
          .
        </div>
      </Error>
    )
  }

  return (
    <div className='container space-y-20'>
      <TodoModal identity={id} modal={modal} />
      <div className='flex items-center justify-between gap-3'>
        <div className='flex w-full items-center gap-3 text-gray-800'>
          <Link to='/'>
            <Icon type='back' className='h-8 w-8' />
          </Link>
          {activityDetail.isLoading ? (
            <div className='flex w-full max-w-3xl flex-col gap-2.5'>
              <div className='h-6 w-full animate-pulse rounded-md bg-gray-200' />
              <div className='h-6 w-full animate-pulse rounded-md bg-gray-200' />
              <div className='h-6 w-1/2 animate-pulse rounded-md bg-gray-200' />
            </div>
          ) : (
            <h2 className='line-clamp-3 max-w-3xl text-2xl font-semibold'>
              {activityDetail.data?.title}
            </h2>
          )}
          <Button
            type='button'
            variant='ghost'
            isIcon
            isRounded
            disabled={activityDetail.isLoading}
          >
            <Icon type='pencil' className='h-5 w-5 text-gray-600' />
          </Button>
        </div>
        <div className='flex items-center gap-4'>
          <SortTodo isLoading={activityDetail.isLoading} />
          <Button
            type='button'
            leftIcon={<Icon type='plus' className='mr-2 h-5 w-5' />}
            variant='solid'
            color='primary'
            size='lg'
            disabled={activityDetail.isLoading}
            onClick={handleCreateTodo}
            isRounded
          >
            Tambah
          </Button>
        </div>
      </div>
      <div className='my-20'>
        {activityDetail.isLoading ? (
          <div>Loading....</div>
        ) : activityDetail.isError ? (
          <Alert
            variant='danger'
            message={getResultError(activityDetail.error)}
          />
        ) : isEmpty ? (
          <Empty className='mx-auto h-auto w-full max-w-xl' />
        ) : (
          JSON.stringify(activityDetail.data?.todo_items)
        )}
      </div>
    </div>
  )
}

export default Page
