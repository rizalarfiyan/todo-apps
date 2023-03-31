import React, { createContext, forwardRef, useState } from 'react'

import Button from '@components/Button'
import Icon from '@components/Icon'
import Modal from '@components/Modal'

import {
  ConfirmationContextImpl,
  ConfirmationProps,
} from './Confirmation.types'

export const ConfirmationContext = createContext<ConfirmationContextImpl>({
  close: () => {},
  setConfirm: () => {},
})

const Confirmation = forwardRef<HTMLDivElement, ConfirmationProps>(
  (props, ref) => {
    const {
      isOpen,
      close,
      content,
      textClose = 'Batal',
      textConfirm = 'Hapus',
      onReject,
      onConfirm,
      ...rest
    } = props

    const [isLoading, setIsLoading] = useState(false)

    const handleReject = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      if (onReject) onReject(close)
      close()
    }

    const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      onConfirm?.(setIsLoading, close)
    }

    return (
      <Modal
        ref={ref}
        isOpen={isOpen}
        handler={close}
        size='xxs'
        dismiss={{
          closeButton: true,
          escapeKey: false,
          outsidePress: false,
        }}
        isCenter
        {...rest}
      >
        <div className='flex flex-col gap-6 p-8 text-center'>
          <Icon type='confirm' className='mx-auto h-16 w-16 text-red-500' />
          <div className='mx-auto max-w-xs'>{content}</div>
          <div className='flex items-center justify-center gap-5'>
            <Button
              type='button'
              variant='light'
              isRounded
              size='lg'
              className='!px-10'
              onClick={handleReject}
              disabled={isLoading}
            >
              {textClose}
            </Button>
            <Button
              type='button'
              variant='solid'
              color='danger'
              isRounded
              size='lg'
              className='!px-10'
              onClick={handleConfirm}
              isLoading={isLoading}
            >
              {textConfirm}
            </Button>
          </div>
        </div>
      </Modal>
    )
  }
)

Confirmation.displayName = 'Confirmation'

export default Confirmation
