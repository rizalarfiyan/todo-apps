import clsx from 'clsx'

import { getProperty } from '@utils/base'
import { createMemoClass } from '@utils/styles'

import {
  NotificationPosition,
  NotificationPositionMap,
  NotificationWrapperProps,
} from './Notification.types'

export const position: NotificationPositionMap<string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-right': 'bottom-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'top-middle': 'top-0 left-1/2 -translate-x-1/2 transform',
  'bottom-middle': 'bottom-0 left-1/2 -translate-x-1/2 transform',
}

export default createMemoClass((props: NotificationWrapperProps) => {
  const className = clsx(
    'pointer-events-none fixed z-50 max-h-screen w-full overflow-hidden p-4 sm:max-w-sm sm:p-4',
    getProperty(position, props?.position || NotificationPosition['top-right'])
  )
  return className
})
