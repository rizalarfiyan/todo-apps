import { BaseListDTO } from './base'

import { PRIORITY_ACTIVITY } from '@/constants'

export type ActivityListDTO = BaseListDTO<ActivityItemDTO[]>

export interface ActivityItemDTO {
  id: number
  title: string
  created_at: string
}

export interface DetailActivityDTO extends ActivityItemDTO {
  todo_items: TodoActifityItemDTO[]
}

export interface TodoActifityItemDTO {
  id: number
  title: string
  activity_group_id: number
  is_active: number
  priority: PRIORITY_ACTIVITY
}
