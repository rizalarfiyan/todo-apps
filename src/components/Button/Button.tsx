import clsx from 'clsx'
import React, { forwardRef } from 'react'

import Spinner from '@components/Spinner'

import useButtonClass from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    active,
    children,
    className,
    color,
    disabled,
    isFluid,
    isIcon,
    isLoading,
    isRounded,
    leftIcon,
    loadingText,
    rightIcon,
    size,
    variant,
    ...rest
  } = props
  const isDisabled = disabled || isLoading
  const classes = useButtonClass({
    isDisabled,
    isFluid,
    isIcon,
    isRounded,
    size,
    variant,
  })
  return (
    <button
      ref={ref}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      data-active={active ? 'true' : undefined}
      data-color={color || undefined}
      className={clsx(classes, className)}
      {...rest}
    >
      <>
        {leftIcon &&
          (isLoading
            ? !loadingText && <span className='opacity-0'>{leftIcon}</span>
            : leftIcon)}
        {isLoading && (
          <Spinner
            className={clsx(
              loadingText ? 'relative' : 'absolute',
              loadingText ? 'mr-2' : 'mr-0'
            )}
            size='sm'
          />
        )}
        {isLoading
          ? loadingText || <span className='opacity-0'>{children}</span>
          : children}
        {rightIcon &&
          (isLoading
            ? !loadingText && <span className='opacity-0'>{rightIcon}</span>
            : rightIcon)}
      </>
    </button>
  )
})

Button.displayName = 'Button'

export default Button
