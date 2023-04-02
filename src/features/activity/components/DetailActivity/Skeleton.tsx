import React from 'react'

const Skeleton: React.FC = () => {
  return (
    <div className='relative flex w-full animate-pulse items-center justify-between gap-4 rounded-md bg-white p-4 shadow-md'>
      <div className='flex w-full flex-col gap-4 md:flex-row'>
        <div className='flex w-auto items-center gap-2'>
          <div className='h-8 w-8 rounded-md bg-gray-200' />
          <div className='block h-6 w-32 rounded-md bg-gray-200 md:hidden' />
        </div>
        <div className='flex w-full flex-col gap-2'>
          <div className='h-5 w-full rounded-md bg-gray-200' />
          <div className='h-5 w-3/4 rounded-md bg-gray-200' />
        </div>
      </div>
      <div className='absolute right-4 top-4 h-8 w-8 rounded-md bg-gray-200 md:relative md:inset-0' />
    </div>
  )
}

export default Skeleton
