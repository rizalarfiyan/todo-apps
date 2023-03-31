import clsx from 'clsx'
import React, { forwardRef } from 'react'

import { ModalFooterProps } from './Modal.types'

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  (props, ref) => {
    const { className, children, ...rest } = props
    return (
      <div ref={ref} className={clsx('modal-footer', className)} {...rest}>
        {children}
      </div>
    )
  }
)

ModalFooter.displayName = 'ModalFooter'

export default ModalFooter
