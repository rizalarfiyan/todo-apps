import clsx from 'clsx'

import { getProperty } from '@utils/base'
import { createMemoClass } from '@utils/styles'

import {
  ButtonData,
  ButtonSize,
  ButtonSizeMap,
  ButtonVariant,
  ButtonVariantMap,
} from './Button.types'

const sizes: ButtonSizeMap<string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

const variants: ButtonVariantMap<string> = {
  outline: 'outline',
  solid: 'solid',
  ghost: 'ghost',
  light: 'light',
  default: 'default',
}

export default createMemoClass((props: ButtonData) => {
  return clsx(
    'btn',
    getProperty(sizes, props?.size || ButtonSize.md),
    getProperty(variants, props?.variant || ButtonVariant.default),
    props?.isDisabled && 'disabled',
    props?.isIcon && 'icon-only',
    props?.isRounded && 'rounded',
    props?.isFluid && 'fluid'
  )
})
