import {
  FloatingContext,
  Placement,
  ReferenceType,
  Strategy,
} from '@floating-ui/react-dom-interactions'

import { DismissType, OffsetType } from '@/types/components'

export type DropdownProps = React.HTMLProps<HTMLDivElement> & IDropdownProps

export interface IDropdownProps {
  open?: boolean
  action?: React.Dispatch<React.SetStateAction<any>>
  placement: Placement
  dismiss?: DismissType
  offset?: OffsetType
  children: React.ReactNode
}

export interface DropdownContextData {
  open: boolean
  strategy: Strategy
  x?: number | null
  y?: number | null
  context: FloatingContext<ReferenceType>
  reference: (node: HTMLElement) => void
  floating: (node: HTMLElement) => void
  getReferenceProps: (userProps?: React.HTMLProps<Element>) => any
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any
}

export interface IDropdownActionProps {
  children: React.ReactNode | React.ComponentProps<any>
}

export type DropdownActionProps = React.HTMLProps<HTMLDivElement> &
  IDropdownActionProps

export interface IDropdownMenuProps {
  className?: string
  children: React.ReactNode
}

export type DropdownMenuProps = React.HTMLProps<HTMLDivElement> &
  IDropdownMenuProps
