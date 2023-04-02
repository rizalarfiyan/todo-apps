import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

import useButtonClass from './Button.styles'
import { ButtonLinkProps } from './ButtonLink.types'

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (props, ref) => {
    const {
      children,
      className,
      color,
      isFluid,
      isIcon,
      isRounded,
      leftIcon,
      rightIcon,
      size,
      variant,
      ...rest
    } = props
    const classes = useButtonClass({
      isFluid,
      isIcon,
      isRounded,
      size,
      variant,
    })

    return (
      <Link
        ref={ref}
        className={clsx(classes, className)}
        data-color={color || undefined}
        {...rest}
      >
        <>
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </>
      </Link>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
