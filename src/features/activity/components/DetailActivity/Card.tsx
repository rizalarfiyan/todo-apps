import clsx from 'clsx'
import React from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import { TodoItemDTO } from '@dto/activity'

import { PRIORITY_ACTIVITY_OPTIONS } from '@/constants'

const Card: React.FC<{
  todo: TodoItemDTO
}> = ({ todo }) => {
  const color =
    PRIORITY_ACTIVITY_OPTIONS.find((val) => val.value === todo.priority)
      ?.color || 'bg-gray-500'

  return (
    <div className='flex w-full items-center justify-between gap-4 rounded-md bg-white p-4 shadow-md'>
      <div className='flex items-center gap-4'>
        <div>{todo.is_active ? 'true' : 'false'}</div>
        <div>
          <div className={clsx('h-3 w-3 rounded-full', color)} />
        </div>
        <h4 className='line-clamp-2 w-full text-base'>{todo.title}</h4>
        <Button type='button' variant='ghost' isIcon isRounded>
          <Icon type='pencil' className='h-5 w-5 text-gray-600' />
        </Button>
      </div>
      <Button variant='light' type='button' isIcon>
        <Icon type='trash' className='h-5 w-5 text-gray-600' />
      </Button>
    </div>
  )
}

export default Card
