export const SpinnerSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const

export type SpinnerSize = (typeof SpinnerSize)[keyof typeof SpinnerSize]

export type SpinnerSizeMap<T> = {
  [size in keyof typeof SpinnerSize]: T
}

export type SpinnerProps = React.HTMLAttributes<SVGSVGElement> & ISpinnerProps

export interface ISpinnerProps {
  size?: SpinnerSize
}
