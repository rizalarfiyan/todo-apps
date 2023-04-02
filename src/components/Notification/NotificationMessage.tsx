import clsx from 'clsx'
import React, { useEffect, useMemo } from 'react'

import Icon from '@components/Icon'

import {
  NotificationMessageProps,
  NotificationMessageStyle,
  NotificationType,
} from './Notification.types'

const NotificationMessage: React.FC<NotificationMessageProps> = ({
  id,
  message,
  type,
  duration,
  onRemove,
}) => {
  const getStyle: NotificationMessageStyle = useMemo(() => {
    switch (type) {
      case NotificationType.SUCCESS:
        return {
          base: 'bg-white border-green-500',
          iconstyle: 'text-green-500',
          icon: 'success',
        }
      case NotificationType.ERROR:
        return {
          base: 'bg-white border-red-500',
          iconstyle: 'text-red-500',
          icon: 'error',
        }
      case NotificationType.WARNING:
        return {
          base: 'bg-white border-yellow-500',
          iconstyle: 'text-yellow-500',
          icon: 'warning',
        }
      default:
        return {
          base: 'bg-white border-blue-500',
          iconstyle: 'text-blue-500',
          icon: 'info',
        }
    }
  }, [])

  useEffect(() => {
    if (duration && onRemove) {
      setTimeout(() => {
        onRemove(id)
      }, duration)
    }
  }, [duration])

  return (
    <div
      className={clsx(
        'visible flex max-h-40 w-full transform cursor-pointer flex-row rounded-md border-l-4 shadow-lg',
        getStyle.base
      )}
      onClick={() => onRemove && onRemove(id)}
      aria-hidden='true'
    >
      <div className='flex-no-wrap flex w-full flex-row gap-2 p-4'>
        {getStyle.icon && (
          <Icon
            type={getStyle.icon}
            className={clsx(
              'mx-auto mr-1 flex h-8 w-8 select-none items-center text-xl',
              getStyle.iconstyle
            )}
          />
        )}

        <div className='flex-no-wrap flex w-full flex-col px-1'>
          <div className='my-auto line-clamp-2 flex break-all text-sm leading-tight text-gray-800'>
            {message}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationMessage
