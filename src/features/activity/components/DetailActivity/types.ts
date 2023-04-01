import { IconType } from '@components/Icon'

import { UseDiscosure } from '@/types/hooks'
import { TodoItemDTO } from '@dto/activity'

export type SortCallback = (a: TodoItemDTO, b: TodoItemDTO) => number

export interface CardProps {
  todo: TodoItemDTO
  activityGroupId: string
}

export interface TodoModalProps {
  modal: UseDiscosure
  identity: string
}

export interface SortTodoProps {
  isLoading: boolean
  sort?: SortAction
  onSort: (sort: SortAction) => void
}

export interface SortAction {
  name: string
  icon: IconType
  action: SortCallback
}
