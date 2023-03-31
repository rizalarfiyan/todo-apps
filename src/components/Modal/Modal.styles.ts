import clsx from 'clsx'

import { getProperty } from '@utils/base'
import { createMemoClass } from '@utils/styles'

import { ModalProps, ModalSize, ModalSizeMap } from './Modal.types'

const sizes: ModalSizeMap<string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

export default createMemoClass((props: ModalProps) => {
  return clsx(
    'modal',
    getProperty(sizes, props?.size || ModalSize.md),
    props?.className
  )
})
