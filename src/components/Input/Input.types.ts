import React from 'react'

export type OmittedTypes =
  | 'size'
  | 'disabled'
  | 'required'
  | 'checked'
  | 'defaultChecked'
  | 'readOnly'

export type InputHTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  OmittedTypes
>

export type InputProps<T = HTMLElement> = IInputProps &
  InputHTMLAttributes &
  React.RefAttributes<T>

export interface IInputProps<T = HTMLInputElement> {
  disabled?: React.InputHTMLAttributes<T>['disabled']
  invalid?: boolean
  required?: React.InputHTMLAttributes<T>['required']
  readOnly?: React.InputHTMLAttributes<T>['readOnly']
  color?: string
  size?: InputSize
  variant?: InputVariant
  as?: React.ElementType
  type?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

export const InputSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const

export type InputSize = (typeof InputSize)[keyof typeof InputSize]

export type InputSizeMap<T> = {
  [size in keyof typeof InputSize]: T
}

export const InputVariant = {
  outline: 'outline',
  solid: 'solid',
  default: 'default',
} as const

export type InputVariant = (typeof InputVariant)[keyof typeof InputVariant]

export type InputVariantMap<T> = {
  [variant in keyof typeof InputVariant]: T
}
