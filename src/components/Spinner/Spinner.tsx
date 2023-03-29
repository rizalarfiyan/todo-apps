import clsx from 'clsx'
import React, { forwardRef } from 'react'

import useSpinClass from './Spinner.styles'
import { SpinnerProps } from './Spinner.types'

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  (props, ref): JSX.Element => {
    const { size, className, ...rest } = props
    const classes = useSpinClass({ size })

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        stroke='currentColor'
        className={clsx(classes, className)}
        fill='none'
        viewBox='0 0 66 66'
        ref={ref}
        {...rest}
      >
        <circle
          cx='33'
          cy='33'
          fill='none'
          r='28'
          stroke='currentColor'
          strokeWidth='10'
          className='opacity-30'
        />
        <circle
          cx='33'
          cy='33'
          fill='none'
          r='28'
          stroke='currentColor'
          strokeDasharray='40, 134'
          strokeDashoffset='325'
          strokeLinecap='round'
          strokeWidth='10'
          className='opacity-70'
        />
      </svg>
    )
  }
)

Spinner.displayName = 'Spinner'

export default Spinner
