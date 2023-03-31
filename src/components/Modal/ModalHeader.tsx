import clsx from 'clsx'
import React, { forwardRef } from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'

import { useModalContext } from './Modal'
import { ModalHeaderProps } from './Modal.types'

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  (props, ref) => {
    const { className, children, ...rest } = props
    const { dismiss, isLoading, handler } = useModalContext()
    return (
      <div ref={ref} className={clsx('modal-header', className)} {...rest}>
        <h3 className='text-xl font-medium text-gray-900'>{children}</h3>
        {dismiss?.closeButton && (
          <Button
            type='button'
            variant='outline'
            className='close'
            disabled={isLoading}
            onClick={handler}
            isIcon
          >
            <Icon type='times' className='h-5 w-5 text-gray-800' />
          </Button>
        )}
      </div>
    )
  }
)

ModalHeader.displayName = 'ModalHeader'

export default ModalHeader
