import { Links } from '@/types/components'

export type NavigationProps = React.HTMLAttributes<HTMLDivElement> &
  INavigationProps

export interface INavigationProps {
  title: string
  links?: Links[]
  isFixed?: boolean
  fixedOffset?: number
}
