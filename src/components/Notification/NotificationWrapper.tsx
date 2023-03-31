import clsx from 'clsx'
import React from 'react'

import {
  NotificationAction,
  NotificationWrapperProps,
} from './Notification.types'
import NotificationMessage from './NotificationMessage'
import useNotificationWrapperClasses from './NotificationWrapper.styles'

const NotificationWrapper: React.FC<NotificationWrapperProps> = (props) => {
  const { className, position, actionData, ...rest } = props

  const classes = useNotificationWrapperClasses({ position })

  const handleRemove = (id: string) => {
    actionData.notificationDispatch({
      type: NotificationAction.REMOVE,
      payload: {
        id,
      },
    })
  }

  return (
    <div className={clsx(classes, className)} {...rest}>
      <div className='fade pointer-events-none mr-8 w-full flex-1 flex-col justify-end'>
        {actionData.notification.map((val) => {
          return (
            <div
              key={val.id}
              className='pointer-events-auto flex w-full transform py-1 transition-all duration-300'
            >
              <NotificationMessage
                id={val.id.toString()}
                message={val.content.message}
                type={val.type}
                duration={val.content.duration}
                onRemove={handleRemove}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NotificationWrapper
