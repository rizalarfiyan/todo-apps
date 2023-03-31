import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
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
        <AnimatePresence initial={false}>
          {actionData.notification.map((val) => {
            return (
              <motion.div
                key={val.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
                <div className='pointer-events-auto flex w-full py-1'>
                  <NotificationMessage
                    id={val.id.toString()}
                    message={val.content.message}
                    type={val.type}
                    duration={val.content.duration}
                    onRemove={handleRemove}
                  />
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NotificationWrapper
