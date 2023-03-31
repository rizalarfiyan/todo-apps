import clsx from 'clsx'
import React, { forwardRef } from 'react'

import useAlertClass from './Alert.styles'
import { AlertProps } from './Alert.types'

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { message, variant, children, className, ...rest } = props
  const classes = useAlertClass({ variant })

  return (
    <div className={clsx(classes, className)} ref={ref} {...rest}>
      {message || children}
    </div>
  )
})

Alert.displayName = 'Alert'

export default Alert
