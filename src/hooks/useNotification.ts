import { useMemo } from 'react'

import {
  NotificationAction,
  NotificationHooks,
  NotificationType,
  useNotificationContext,
} from '@components/Notification'

const useNotification = (): NotificationHooks => {
  const { notificationDispatch } = useNotificationContext()

  return useMemo(() => {
    return {
      success: (message: string, duration?: number) => {
        notificationDispatch({
          type: NotificationAction.ADD,
          payload: {
            type: NotificationType.SUCCESS,
            content: {
              message,
              duration,
            },
          },
        })
      },
      error: (message: string, duration?: number) => {
        notificationDispatch({
          type: NotificationAction.ADD,
          payload: {
            type: NotificationType.ERROR,
            content: {
              message,
              duration,
            },
          },
        })
      },
      info: (message: string, duration?: number) => {
        notificationDispatch({
          type: NotificationAction.ADD,
          payload: {
            type: NotificationType.INFO,
            content: {
              message,
              duration,
            },
          },
        })
      },
      warning: (message: string, duration?: number) => {
        notificationDispatch({
          type: NotificationAction.ADD,
          payload: {
            type: NotificationType.WARNING,
            content: {
              message,
              duration,
            },
          },
        })
      },
    }
  }, [])
}

export { useNotification }
