import {
  autoUpdate,
  flip,
  offset as fuiOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { DropdownContextData, DropdownProps } from './Dropdown.types'

const DropdownContext = createContext<DropdownContextData>(
  {} as DropdownContextData
)

export const useDropdownContext = () => useContext(DropdownContext)

const Dropdown = (props: DropdownProps) => {
  const {
    open: originalOpen,
    action: originalAction,
    placement,
    dismiss,
    offset,
    children,
  } = props

  const [internalOpen, setInternalOpen] = useState(false)
  const open = originalOpen || internalOpen
  const action = originalAction || setInternalOpen
  const { x, y, reference, floating, strategy, refs, update, context } =
    useFloating({
      open,
      onOpenChange: action,
      middleware: [fuiOffset(offset), flip(), shift()],
      placement,
    })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, dismiss),
  ])

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update)
    }
  }, [open, update, refs.reference, refs.floating])

  const valueContext = useMemo(
    (): DropdownContextData => ({
      open,
      strategy,
      x,
      y,
      context,
      reference,
      floating,
      getReferenceProps,
      getFloatingProps,
    }),
    [
      open,
      strategy,
      x,
      y,
      context,
      reference,
      floating,
      getFloatingProps,
      getReferenceProps,
    ]
  )

  return (
    <DropdownContext.Provider value={valueContext}>
      {children}
    </DropdownContext.Provider>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown
