import React, { useReducer } from 'react'
import { createPortal } from 'react-dom'

import NotificationWrapper, {
  initialNotification,
  NotificationContext,
  notificationReducer,
} from '@components/Notification'

const NotificationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    initialNotification
  )

  return (
    <NotificationContext.Provider
      value={{ notification, notificationDispatch }}
    >
      {children}
      {createPortal(
        <NotificationWrapper
          actionData={{
            notification,
            notificationDispatch,
          }}
        />,
        document.body
      )}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
