import React, { forwardRef } from 'react'

import { getProperty } from '@utils/base'

import icons from './Icon.data'
import { IconProps } from './Icon.types'

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { width, height, type, fill, ...rest } = props
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={width || 24}
      height={height || 24}
      viewBox='0 0 24 24'
      fill={fill || 'currentColor'}
      {...rest}
    >
      <path d={getProperty(icons, type)}></path>
    </svg>
  )
})

Icon.displayName = 'Icon'

export default Icon
