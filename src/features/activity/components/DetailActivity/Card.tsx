import clsx from 'clsx'
import React from 'react'

import Button from '@components/Button'
import Checkbox from '@components/Checkbox'
import Icon from '@components/Icon'

import useConfirmation from '@hooks/useConfirmation'
import useDisclosure from '@hooks/useDisclosure'
import { useNotification } from '@hooks/useNotification'

import { useDeleteTodo, useUpdateTodo } from '@features/activity/services'

import { truncate } from '@utils/base'

import TodoModal from './TodoModal'
import { CardProps } from './types'

import { PRIORITY_ACTIVITY_OPTIONS } from '@/constants'

const Card: React.FC<CardProps> = ({ todo, activityGroupId }) => {
  const priotiy = PRIORITY_ACTIVITY_OPTIONS.find(
    (val) => val.value === todo.priority
  )

  const notification = useNotification()
  const deleteTodo = useDeleteTodo()
  const updateTodo = useUpdateTodo()
  const confirm = useConfirmation()
  const modal = useDisclosure()

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

  const handleUpdateTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    modal.open()
  }

  const handleChangeChekbox = async (value: boolean) => {
    await updateTodo
      .mutateAsync({
        data: {
          activity_group_id: activityGroupId,
          id: todo?.id as number,
          is_active: value,
        },
      })
      .then(() => {
        notification.success('Todo Item berhasil diperbarui')
      })
      .catch(() => {
        notification.error('Todo Item gagal diperbarui')
      })
  }

  const isDisable = deleteTodo.isLoading || updateTodo.isLoading

  return (
    <div className='relative flex w-full items-center justify-between gap-4 rounded-md bg-white p-4 shadow-md'>
      <TodoModal activityGroupId={activityGroupId} modal={modal} todo={todo} />
      <div className='flex flex-col items-center gap-4 md:flex-row'>
        <div className='ml-1 mr-auto flex items-center gap-4 md:mx-auto'>
          <Checkbox
            initialValue={todo.is_active}
            onChange={handleChangeChekbox}
            disabled={isDisable}
            isLoading={updateTodo.isLoading}
          />
          <div className='flex items-center gap-2'>
            <div
              className={clsx(
                'inline-flex h-3 w-3 rounded-full',
                priotiy?.color || 'bg-gray-500'
              )}
            />
            <span className='block md:hidden'>
              {priotiy?.name || 'Not defined'}
            </span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <h4
            className={clsx(
              'w-full text-base',
              todo.is_active && 'text-gray-400 line-through'
            )}
          >
            {todo.title}
          </h4>
          <Button
            type='button'
            variant='ghost'
            isIcon
            isRounded
            disabled={isDisable}
            onClick={handleUpdateTodo}
          >
            <Icon type='pencil' className='h-5 w-5 text-gray-400' />
          </Button>
        </div>
      </div>
      <Button
        variant='light'
        type='button'
        isIcon
        onClick={handleDeleteTodo}
        isLoading={deleteTodo.isLoading}
        disabled={isDisable}
        className='!md:relative !absolute right-3 top-3 sm:right-4 sm:top-4'
      >
        <Icon type='trash' className='h-5 w-5 text-gray-600' />
      </Button>
    </div>
  )
}

export default Card
