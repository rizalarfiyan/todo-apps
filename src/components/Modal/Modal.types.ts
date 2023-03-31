export interface IModalProps {
  className?: string
  isOpen: boolean
  handler: React.Dispatch<React.SetStateAction<any>>
  isLoading?: boolean
  isCenter?: boolean
  isScrollable?: boolean
  dismiss?: ModalDismissType
  size?: ModalSize
}

export type ModalProps = Omit<React.HTMLProps<HTMLDivElement>, 'size'> &
  IModalProps

export type ModalDismissType = {
  enabled?: boolean
  escapeKey?: boolean
  outsidePress?: boolean
  closeButton?: boolean
}

export type ModalHeaderProps = React.HTMLProps<HTMLDivElement>
export type ModalBodyProps = React.HTMLProps<HTMLDivElement>
export type ModalFooterProps = React.HTMLProps<HTMLDivElement>

export const ModalSize = {
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const

export type ModalSize = (typeof ModalSize)[keyof typeof ModalSize]

export type ModalSizeMap<T> = {
  [size in keyof typeof ModalSize]: T
}
