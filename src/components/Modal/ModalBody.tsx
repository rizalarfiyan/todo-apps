import clsx from 'clsx'
import React, { forwardRef } from 'react'

import { useModalContext } from './Modal'
import { ModalBodyProps } from './Modal.types'

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>((props, ref) => {
  const { className, children, ...rest } = props
  const { isScrollable } = useModalContext()
  return (
    <div
      ref={ref}
      className={clsx('modal-body', isScrollable && 'scrollable', className)}
      {...rest}
    >
      {children}
    </div>
  )
})

ModalBody.displayName = 'ModalBody'

export default ModalBody
