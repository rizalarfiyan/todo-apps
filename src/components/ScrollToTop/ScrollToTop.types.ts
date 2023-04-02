import { IconType } from '@components/Icon'

export interface ScrollToTopProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  iconType?: IconType
  notSmooth?: boolean
  top?: number
}
