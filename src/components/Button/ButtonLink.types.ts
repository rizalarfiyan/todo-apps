import { LinkProps } from 'react-router-dom'

import { ButtonSize, ButtonVariant } from './Button.types'

export type ButtonLinkProps = LinkProps & IButtonLinkProps

export interface IButtonLinkProps {
  isFluid?: boolean
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  children?: React.ReactNode
  className?: string
  color?: string
  variant?: ButtonVariant
  size?: ButtonSize
  isRounded?: boolean
  isIcon?: boolean
}
