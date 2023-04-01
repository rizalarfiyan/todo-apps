import { cloneElement, forwardRef, useMemo } from 'react'

import { mergeRefs } from '@utils/base'

import { useDropdownContext } from './Dropdown'
import { DropdownActionProps } from './Dropdown.types'

const DropdownAction = forwardRef<HTMLDivElement, DropdownActionProps>(
  ({ children, ...rest }, ref) => {
    const { getReferenceProps, reference } = useDropdownContext()

    const mergedRef = useMemo(
      () => mergeRefs([ref, reference]),
      [ref, reference]
    )

    return cloneElement(children, {
      ...getReferenceProps({
        ...rest,
        ref: mergedRef,
      }),
    })
  }
)

DropdownAction.displayName = 'DropdownAction'

export default DropdownAction
