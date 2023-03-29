import clsx from 'clsx'
import React, { forwardRef } from 'react'

import Spinner from '@components/Spinner'

import { LoadingScreenProps } from './LoadingScreen.types'

export const LoadingScreen = forwardRef<HTMLDivElement, LoadingScreenProps>(
  (props, ref): JSX.Element => {
    const { reason, className, ...rest } = props

    return (
      <div
        className={clsx(
          'loading-screen mx-auto flex min-h-screen w-full items-center justify-center',
          className
        )}
        ref={ref}
        {...rest}
      >
        <div className='flex flex-col items-center'>
          <Spinner size='xl' />
          {reason && (
            <span className='mt-4 max-w-[220px] text-center text-base text-gray-800'>
              {reason}
            </span>
          )}
        </div>
      </div>
    )
  }
)

LoadingScreen.displayName = 'LoadingScreen'

export default LoadingScreen
