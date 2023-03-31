import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import Button from '@components/Button'
import Error from '@components/Error'
import Icon from '@components/Icon'

import useDisclosure from '@hooks/useDisclosure'

import { useActivityDetail } from '@features/activity/services'

import { isNotFound } from '@utils/base'

import Empty from './Empty'
import TodoModal from './TodoModal'

const Page = () => {
  const { id } = useParams()
  const activityDetail = useActivityDetail(id as string)
  const modal = useDisclosure()

  const handleCreateTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    modal.open()
  }

  if (isNotFound(activityDetail)) {
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
      <TodoModal modal={modal} />
      <div className='flex items-center justify-between gap-3'>
        <h2 className='text-4xl font-semibold text-gray-800'>New Activity</h2>
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
      <Empty className='mx-auto h-auto w-full max-w-xl' />
    </div>
  )
}

export default Page
