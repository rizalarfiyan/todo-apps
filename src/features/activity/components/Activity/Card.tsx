import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@components/Button'
import Icon from '@components/Icon'

import useConfirmation from '@hooks/useConfirmation'
import { useNotification } from '@hooks/useNotification'

import { useDeleteActivity } from '@features/activity/services'

import { routeReplace, truncate } from '@utils/base'
import { parseDate } from '@utils/datetime'

import { CardProps } from './types'

import { ROUTE } from '@/constants'

const Card: React.FC<CardProps> = ({
  activity: { id, title, created_at },
  onSuccessDelete,
}) => {
  const notification = useNotification()
  const deleteActivity = useDeleteActivity()
  const confirm = useConfirmation()

  const handleDeleteActivity = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    confirm.setConfirm({
      content: (
        <>
          Apakah anda yakin menghapus activity{' '}
          <b>&#x22;{truncate(title)}&#x22;</b>?
        </>
      ),
      onConfirm: async (setLoading, close) => {
        setLoading(true)
        await deleteActivity
          .mutateAsync({
            data: id,
          })
          .then(() => {
            notification.success('Activity berhasil dihapus')
            onSuccessDelete?.()
          })
          .catch(() => {
            notification.error('Activity gagal dihapus')
          })
          .finally(() => {
            setLoading(false)
            close()
          })
      },
    })
  }

  return (
    <div className='w-[280px] rounded-md bg-white p-5 shadow-md'>
      <Link to={routeReplace(ROUTE.detailActivity, id)}>
        <div className='h-44'>
          <h3 className='line-clamp-6 text-lg font-semibold text-gray-800'>
            {title}
          </h3>
        </div>
      </Link>
      <div className='mt-2 flex items-center justify-between text-gray-600'>
        <div>{parseDate(created_at)}</div>
        <Button
          variant='light'
          type='button'
          isIcon
          onClick={handleDeleteActivity}
          isLoading={deleteActivity.isLoading}
        >
          <Icon type='trash' className='h-5 w-5 text-gray-600' />
        </Button>
      </div>
    </div>
  )
}

export default Card
