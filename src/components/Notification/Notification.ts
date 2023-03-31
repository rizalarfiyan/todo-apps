import { createContext, useContext } from 'react'

import {
  NotificationAction,
  NotificationActions,
  NotificationContextImpl,
  NotificationData,
} from './Notification.types'

import { COMPONENT } from '@/constants'

const initialNotification: NotificationData[] = []

const NotificationContext = createContext<NotificationContextImpl>({
  notification: initialNotification,
  notificationDispatch: () => null,
})

const useNotificationContext = () => useContext(NotificationContext)

const notificationReducer = (
  state: NotificationData[],
  action: NotificationActions
): any => {
  switch (action.type) {
    case NotificationAction.ADD:
      return [
        ...state,
        {
          id: (+new Date()).toString(),
          content: {
            message: action.payload.content?.message || '',
            duration:
              action.payload.content?.duration ||
              COMPONENT.notification.duration,
          },
          type: action.payload.type,
        },
      ]
    case NotificationAction.REMOVE:
      return state.filter((val) => val.id !== action.payload.id)
    case NotificationAction.REMOVE_ALL:
      return initialNotification
    default:
      return state
  }
}

export {
  initialNotification,
  NotificationContext,
  notificationReducer,
  useNotificationContext,
}
