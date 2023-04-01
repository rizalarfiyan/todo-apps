import clsx from 'clsx'
import React, { forwardRef } from 'react'

import { ErrorProps } from './Error.types'

const Error = forwardRef<HTMLDivElement, ErrorProps>((props, ref) => {
  const { className, code, title, subtitle, children, ...rest } = props
  return (
    <div
      className={clsx(
        'mx-auto flex h-full min-h-screen w-full max-w-[320px] flex-col items-center justify-center text-center leading-snug',
        className
      )}
      ref={ref}
      {...rest}
    >
      {code && (
        <h1 className='-mb-8 text-8xl font-bold tracking-wider text-gray-200'>
          {code}
        </h1>
      )}
      {title && (
        <h2 className='text-2xl font-semibold text-gray-700'>{title}</h2>
      )}
      {subtitle && <p className='mt-2 text-gray-500'>{subtitle}</p>}
      {children}
    </div>
  )
})

Error.displayName = 'Error'

export default Error
