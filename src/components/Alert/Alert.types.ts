export const AlertVariant = {
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  info: 'info',
} as const

export type AlertVariant = (typeof AlertVariant)[keyof typeof AlertVariant]

export type AlertVariantMap<T> = {
  [size in keyof typeof AlertVariant]: T
}

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & IAlertProps

export interface IAlertProps {
  message?: string
  variant?: AlertVariant
}
