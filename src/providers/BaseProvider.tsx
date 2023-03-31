import React from 'react'

import ConfirmationProvider from './ConfirmationProvider'
import NotificationProvider from './NotificationProvider'

const BaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <NotificationProvider>
      <ConfirmationProvider>{children}</ConfirmationProvider>
    </NotificationProvider>
  )
}

export default BaseProvider
