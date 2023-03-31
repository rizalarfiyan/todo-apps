import React from 'react'

import NotificationProvider from './NotificationProvider'

const BaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <NotificationProvider>{children}</NotificationProvider>
}

export default BaseProvider
