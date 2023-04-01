import clsx from 'clsx'
import React, { forwardRef } from 'react'

import useInputClass from './Input.styles'
import { InputProps } from './Input.types'

const Input = forwardRef<HTMLElement, InputProps>((props, ref) => {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    as: Comp = 'input',
    className,
    color = 'primary',
    disabled,
    invalid,
    readOnly,
    required,
    size = 'md',
    type = 'text',
    variant = 'outline',
    ...rest
  } = props

  const classes = useInputClass({ size, variant, disabled, invalid })

  return (
    <Comp
      ref={ref}
      readOnly={readOnly}
      aria-readonly={readOnly}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-invalid={invalid}
      required={required}
      aria-required={required}
      aria-describedby={ariaDescribedby}
      data-color={color ? color : undefined}
      className={clsx(classes, className)}
      type={type}
      {...rest}
    />
  )
})

Input.displayName = 'Input'

export default Input
