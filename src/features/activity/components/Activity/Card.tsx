import React from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import { ActivityItemDTO } from '@dto/activity'

import { parseDate } from '@utils/datetime'

const Card: React.FC<{
  activity: ActivityItemDTO
}> = ({ activity: { title, created_at } }) => {
  return (
    <div className='w-[280px] rounded-md bg-white p-5 shadow-md'>
      <div className='h-44'>
        <h3 className='line-clamp-6 text-lg font-semibold text-gray-800'>
          {title}
        </h3>
      </div>
      <div className='mt-2 flex items-center justify-between text-gray-600'>
        <div>{parseDate(created_at)}</div>
        <Button variant='outline' type='button' isIcon>
          <Icon type='trash' className='h-5 w-5 text-gray-600' />
        </Button>
      </div>
    </div>
  )
}

export default Card
