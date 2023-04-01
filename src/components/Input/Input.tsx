import clsx from 'clsx'
import React, { forwardRef, useEffect, useState } from 'react'

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
    limit = 0,
    onChange,
    value,
    ...rest
  } = props

  const [length, setLength] = useState(0)
  const hasLimit = limit !== 0
  const isLimit = length === limit

  const classes = useInputClass({
    size,
    variant,
    disabled,
    invalid: invalid || isLimit,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasLimit) {
      onChange?.(event)
      return
    }
    const getLength = event.target.value.length
    setLength(getLength)
    if (getLength >= limit) return
    onChange?.(event)
  }

  useEffect(() => {
    setLength(typeof value === 'number' ? 0 : value?.length || 0)
  }, [])

  return (
    <>
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
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {hasLimit && (
        <div className='!mt-2 mr-1 flex justify-end'>
          <p
            className={clsx(
              'text-right text-sm',
              isLimit ? 'text-red-500' : 'text-gray-600'
            )}
          >
            {length}/{limit}
          </p>
        </div>
      )}
    </>
  )
})

Input.displayName = 'Input'

export default Input
