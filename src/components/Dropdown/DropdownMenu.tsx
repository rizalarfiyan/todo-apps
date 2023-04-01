import {
  FloatingFocusManager,
  FloatingPortal,
} from '@floating-ui/react-dom-interactions'
import { AnimatePresence, motion } from 'framer-motion'
import React, { forwardRef, useMemo } from 'react'

import { mergeRefs } from '@utils/base'

import { useDropdownContext } from './Dropdown'
import { DropdownMenuProps } from './Dropdown.types'

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, className, ...rest }, ref) => {
    const { open, strategy, x, y, context, floating, getFloatingProps } =
      useDropdownContext()
    const mergedRef = useMemo(() => mergeRefs([ref, floating]), [floating, ref])

    const animation = {
      unmount: {
        opacity: 0,
        transformOrigin: 'top',
        transform: 'scale(0.95)',
        transition: {
          duration: 0.2,
        },
      },
      mount: {
        opacity: 1,
        transformOrigin: 'top',
        transform: 'scale(1)',
        transition: {
          duration: 0.2,
        },
      },
    }

    return (
      <FloatingPortal>
        <AnimatePresence initial={false}>
          {open && (
            <FloatingFocusManager context={context}>
              <motion.div
                {...getFloatingProps({
                  ...rest,
                  ref: mergedRef,
                  className: className,
                  style: {
                    position: strategy,
                    top: y ?? '',
                    left: x ?? '',
                  },
                })}
                initial='unmount'
                exit='unmount'
                animate={open ? 'mount' : 'unmount'}
                variants={animation}
              >
                {children}
              </motion.div>
            </FloatingFocusManager>
          )}
        </AnimatePresence>
      </FloatingPortal>
    )
  }
)

DropdownMenu.displayName = 'DropdownMenu'

export default DropdownMenu
