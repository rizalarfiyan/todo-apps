import { BaseListDTO } from './base'

import { PRIORITY_ACTIVITY } from '@/constants'

// Request
export interface CreateActivityRequest {
  title: string
  email: string
}

// Response
export type ActivityListDTO = BaseListDTO<ActivityItemDTO[]>

export interface ActivityItemDTO {
  id: number
  title: string
  created_at: string
}

export interface DetailActivityDTO extends ActivityItemDTO {
  todo_items: TodoActivityItemDTO[]
}

export interface CreateActivityDTO extends ActivityItemDTO {
  email: string
  updated_at: string
}

export interface TodoActivityItemDTO {
  id: number
  title: string
  activity_group_id: number
  is_active: number
  priority: PRIORITY_ACTIVITY
}
