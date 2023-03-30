import React from 'react'

export type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size'> &
  IButtonProps

export interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  isFluid?: boolean
  isRounded?: boolean
  isLoading?: boolean
  isIcon?: boolean
  loadingText?: string
  active?: boolean
  leftIcon?: JSX.Element | null | undefined
  rightIcon?: JSX.Element | null | undefined
  children?: React.ReactNode
  className?: string
  color?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

export interface ButtonData extends IButtonProps {
  isDisabled: boolean
}

export const ButtonSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const

export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize]

export type ButtonSizeMap<T> = {
  [size in keyof typeof ButtonSize]: T
}

export const ButtonVariant = {
  outline: 'outline',
  solid: 'solid',
  ghost: 'ghost',
  light: 'light',
  default: 'default',
} as const

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant]

export type ButtonVariantMap<T> = {
  [variant in keyof typeof ButtonVariant]: T
}
