import React from 'react'

const Skeleton: React.FC = () => {
  return (
    <div className='w-[280px] animate-pulse rounded-md bg-white p-5 shadow-md'>
      <div className='h-44 space-y-2 overflow-hidden'>
        <div className='h-7 w-full rounded-md bg-gray-200' />
        <div className='h-7 w-full rounded-md bg-gray-200' />
        <div className='h-7 w-full rounded-md bg-gray-200' />
        <div className='h-7 w-full rounded-md bg-gray-200' />
        <div className='h-7 w-2/3 rounded-md bg-gray-200' />
      </div>
      <div className='mt-2 flex items-center justify-between text-gray-600'>
        <div className='h-4 w-1/2 rounded-md bg-gray-200' />
        <div className='h-9 w-9 rounded-md bg-gray-200' />
      </div>
    </div>
  )
}

export default Skeleton
