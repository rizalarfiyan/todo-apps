import clsx from 'clsx'

import { getProperty } from '@utils/base'
import { createMemoClass } from '@utils/styles'

import { AlertProps, AlertVariant, AlertVariantMap } from './Alert.types'

export const sizes: AlertVariantMap<string> = {
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
}

export default createMemoClass((props: AlertProps) => {
  const className = clsx(
    'flex justify-center rounded-lg px-6 py-4 text-sm',
    getProperty(sizes, props?.variant || AlertVariant.info)
  )
  return className
})
