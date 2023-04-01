import clsx from 'clsx'
import React from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import useConfirmation from '@hooks/useConfirmation'
import { useNotification } from '@hooks/useNotification'

import { useDeleteTodo } from '@features/activity/services'

import { TodoItemDTO } from '@dto/activity'

import { truncate } from '@utils/base'

import { PRIORITY_ACTIVITY_OPTIONS } from '@/constants'

const Card: React.FC<{
  todo: TodoItemDTO
  activityGroupId: string
}> = ({ todo, activityGroupId }) => {
  const color =
    PRIORITY_ACTIVITY_OPTIONS.find((val) => val.value === todo.priority)
      ?.color || 'bg-gray-500'

  const notification = useNotification()
  const deleteTodo = useDeleteTodo()
  const confirm = useConfirmation()

  const handleDeleteTodo = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    confirm.setConfirm({
      content: (
        <>
          Apakah anda yakin menghapus List Item{' '}
          <b>&#x22;{truncate(todo.title)}&#x22;</b>?
        </>
      ),
      onConfirm: async (setLoading, close) => {
        setLoading(true)
        await deleteTodo
          .mutateAsync({
            data: {
              activityGroupId,
              todoId: todo.id,
            },
          })
          .then(() => {
            notification.success('List Item berhasil dihapus')
          })
          .catch(() => {
            notification.error('List Item gagal dihapus')
          })
          .finally(() => {
            setLoading(false)
            close()
          })
      },
    })
  }

  return (
    <div className='flex w-full items-center justify-between gap-4 rounded-md bg-white p-4 shadow-md'>
      <div className='flex items-center gap-4'>
        <div>{todo.is_active ? 'true' : 'false'}</div>
        <div>
          <div className={clsx('h-3 w-3 rounded-full', color)} />
        </div>
        <h4 className='line-clamp-2 w-full text-base'>{todo.title}</h4>
        <Button
          type='button'
          variant='ghost'
          isIcon
          isRounded
          disabled={deleteTodo.isLoading}
        >
          <Icon type='pencil' className='h-5 w-5 text-gray-600' />
        </Button>
      </div>
      <Button
        variant='light'
        type='button'
        isIcon
        onClick={handleDeleteTodo}
        isLoading={deleteTodo.isLoading}
      >
        <Icon type='trash' className='h-5 w-5 text-gray-600' />
      </Button>
    </div>
  )
}

export default Card
