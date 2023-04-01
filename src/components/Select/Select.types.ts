import { ContextData } from '@floating-ui/react-dom-interactions'

import { KeyValue } from '@/types/base'
import { DismissType, OffsetType } from '@/types/components'

export interface SelectContextData {
  selectedIndex: number
  setSelectedIndex: (index: number) => void
  activeIndex?: number | null
  setActiveIndex: (index: number | null) => void
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>
  setOpen: (open: boolean) => void
  onChange: (value: string) => void
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any
  dataRef: ContextData
}

export type SelectProps = Omit<
  React.ComponentProps<'div'>,
  'value' | 'onChange'
> &
  ISelectProps

export interface ISelectProps {
  arrow?: boolean
  value?: string
  onChange?: (value?: React.ReactNode) => void
  selected?: (element?: React.ReactElement, index?: number) => React.ReactNode
  dismiss?: DismissType
  offset?: OffsetType
  lockScroll?: boolean
  menuProps?: KeyValue
  className?: string
  disabled?: boolean
  children?: React.ReactNode
}

export interface SelectOptionProps extends React.ComponentProps<'li'> {
  value?: string
  index?: number
  disabled?: boolean
  className?: string
  children?: React.ReactNode
}
