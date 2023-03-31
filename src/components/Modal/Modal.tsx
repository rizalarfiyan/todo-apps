import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions'
import clsx from 'clsx'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import React, { createContext, forwardRef, useContext } from 'react'

import { mergeRefs } from '@utils/base'

import useModalClass from './Modal.styles'
import { IModalProps, ModalProps } from './Modal.types'

const ModalContext = createContext<IModalProps>({} as IModalProps)

export const useModalContext = () => useContext(ModalContext)

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    children,
    className,
    dismiss,
    handler,
    isLoading,
    isOpen,
    isScrollable,
    size,
    ...rest
  } = props

  const { floating, context } = useFloating({
    open: isOpen,
    onOpenChange: handler,
  })

  const { getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, dismiss),
  ])

  const mergedRef = React.useMemo(
    () => mergeRefs([ref, floating]),
    [floating, ref]
  )

  const classes = useModalClass({ size, className })
  const modalContext = {
    isScrollable,
    isOpen,
    handler,
    dismiss,
    isLoading,
    children,
    size,
  }

  const id = useId()
  const labelId = `label-${id}`
  const descriptionId = `description-${id}`

  const animation: Variants = {
    mount: {
      opacity: 0,
      y: -300,
      scale: 0.3,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    unmount: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
      },
    },
  }

  const backdropAnimation: Variants = {
    unmount: {
      opacity: 0,
      transition: {
        delay: 0.2,
      },
    },
    mount: {
      opacity: 1,
    },
  }

  return (
    <ModalContext.Provider value={modalContext}>
      <FloatingPortal>
        <AnimatePresence initial={false}>
          {isOpen && (
            <FloatingOverlay
              style={{
                zIndex: 48,
              }}
              lockScroll
            >
              <FloatingFocusManager context={context}>
                <motion.div
                  className={clsx(
                    'modal-container',
                    isScrollable && 'scrollable'
                  )}
                  initial='unmount'
                  exit='unmount'
                  animate={isOpen ? 'mount' : 'unmount'}
                  variants={backdropAnimation}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={clsx(
                      'modal-overlay',
                      dismiss?.enabled &&
                        dismiss?.outsidePress &&
                        'cursor-pointer'
                    )}
                    aria-hidden='true'
                  />
                  <motion.div
                    {...getFloatingProps({
                      ...rest,
                      ref: mergedRef,
                      className: classes,
                      'aria-labelledby': labelId,
                      'aria-describedby': descriptionId,
                    })}
                    initial='mount'
                    exit='unmount'
                    animate={isOpen ? 'animate' : 'unmount'}
                    variants={animation}
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </FloatingFocusManager>
            </FloatingOverlay>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </ModalContext.Provider>
  )
})

Modal.displayName = 'Modal'

export default Modal
