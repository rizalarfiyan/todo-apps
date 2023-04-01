import React from 'react'

import Button from '@components/Button'
import Dropdown from '@components/Dropdown'
import Icon, { IconType } from '@components/Icon'

interface SortTodoProps {
  isLoading: boolean
}

interface SortData {
  name: string
  icon: IconType
}

const sortData: SortData[] = [
  {
    name: 'Terbaru',
    icon: 'sort-desc',
  },
  {
    name: 'Terlama',
    icon: 'sort-asc',
  },
  {
    name: 'A-Z',
    icon: 'sort-asc-letter',
  },
  {
    name: 'Z-A',
    icon: 'sort-desc-letter',
  },
  {
    name: 'Belum Selesai',
    icon: 'sort',
  },
]

const SortTodo: React.FC<SortTodoProps> = ({ isLoading }) => {
  return (
    <Dropdown placement='bottom-end' offset={20}>
      <Dropdown.Action>
        <Button
          type='button'
          variant='solid'
          className='!px-3'
          size='lg'
          isIcon
          disabled={isLoading}
          isRounded
        >
          <Icon type='sort' className='h-5 w-5 text-gray-600' />
        </Button>
      </Dropdown.Action>
      <Dropdown.Menu>
        <div className='w-[200px] divide-y rounded bg-white py-1 text-gray-700 shadow'>
          {sortData.map((val, idx) => {
            return (
              <div
                key={idx}
                className='flex w-full items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-100'
              >
                <div className='flex items-center gap-2'>
                  <Icon
                    type={val.icon}
                    className='mr-2 h-4 w-4 text-blue-500'
                  />
                  <span>{val.name}</span>
                </div>
                <Icon type='check' className='h-4 w-4' />
              </div>
            )
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SortTodo
