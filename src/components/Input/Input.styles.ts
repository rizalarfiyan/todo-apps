import clsx from 'clsx'

import { getProperty } from '@utils/base'
import { createMemoClass } from '@utils/styles'

import {
  InputProps,
  InputSize,
  InputSizeMap,
  InputVariant,
  InputVariantMap,
} from './Input.types'

const sizes: InputSizeMap<string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

const variants: InputVariantMap<string> = {
  outline: 'outline',
  solid: 'solid',
  default: 'default',
}

export default createMemoClass((props: InputProps) => {
  return clsx(
    'form-field',
    getProperty(sizes, props?.size || InputSize.md),
    getProperty(variants, props?.variant || InputVariant.default),
    props?.disabled && 'disabled',
    props?.invalid && 'invalid'
  )
})
