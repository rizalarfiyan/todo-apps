import React from 'react'

import Button from '@components/Button'
import Dropdown from '@components/Dropdown'
import Icon from '@components/Icon'

import { SortAction, SortTodoProps } from './types'

const sortAction: SortAction[] = [
  {
    name: 'Terbaru',
    icon: 'sort-desc',
    action: (a, b) => b.id - a.id,
  },
  {
    name: 'Terlama',
    icon: 'sort-asc',
    action: (a, b) => a.id - b.id,
  },
  {
    name: 'A-Z',
    icon: 'sort-asc-letter',
    action: (a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0),
  },
  {
    name: 'Z-A',
    icon: 'sort-desc-letter',
    action: (a, b) => (a.title < b.title ? 1 : a.title > b.title ? -1 : 0),
  },
  {
    name: 'Belum Selesai',
    icon: 'sort',
    action: (a, b) => Number(b.is_active) - Number(a.is_active),
  },
]

const SortTodo: React.FC<SortTodoProps> = ({ isLoading, sort, onSort }) => {
  const handleClik = (
    event: React.MouseEvent<HTMLButtonElement>,
    sortData: SortAction
  ) => {
    event.preventDefault()
    onSort(sortData)
  }

  return (
    <Dropdown placement='bottom-end' offset={14}>
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
          {sortAction.map((val, idx) => {
            return (
              <button
                type='button'
                key={idx}
                className='flex w-full items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-100'
                onClick={(event) => handleClik(event, val)}
              >
                <div className='flex items-center gap-2'>
                  <Icon
                    type={val.icon}
                    className='mr-2 h-4 w-4 text-blue-500'
                  />
                  <span>{val.name}</span>
                </div>
                {sort && sort.name === val.name && (
                  <Icon type='check' className='h-4 w-4' />
                )}
              </button>
            )
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SortTodo
