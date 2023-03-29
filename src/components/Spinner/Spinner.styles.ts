import clsx from 'clsx'

import { getProperty } from '@utils/base'
import { createMemoClass } from '@utils/styles'

import { SpinnerProps, SpinnerSize, SpinnerSizeMap } from './Spinner.types'

export const sizes: SpinnerSizeMap<string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
}

export default createMemoClass((props: SpinnerProps) => {
  const className = clsx(
    'animate-spin',
    getProperty(sizes, props?.size || SpinnerSize.md)
  )
  return className
})
