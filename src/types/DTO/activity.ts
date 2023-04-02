import { BaseListDTO } from './base'

import { PRIORITY_ACTIVITY } from '@/constants'

// Request
export interface CreateActivityRequest {
  title: string
  email: string
}

export interface UpdateActivityRequest {
  title: string
  id: string
}

export interface BaseTodoRequest {
  title: string
  is_active: boolean
  priority: PRIORITY_ACTIVITY
}

export interface DeleteTodoRequest {
  todoId: number
  activityGroupId: string
}

export interface CreateTodoRequest extends BaseTodoRequest {
  activity_group_id: string
}

export interface UpdateTodoRequest extends Partial<BaseTodoRequest> {
  id: number
  activity_group_id: string
}

// Response
export type ActivityListDTO = BaseListDTO<ActivityItemDTO[]>
export type TodoListDTO = BaseListDTO<TodoItemDTO[]>

export interface ActivityItemDTO {
  id: number
  title: string
  created_at: string
}

export interface DetailActivityDTO extends ActivityItemDTO {
  todo_items: TodoItemDTO[]
}

export interface CreateUpdateActivityDTO extends ActivityItemDTO {
  email: string
  updated_at: string
}

export interface TodoItemDTO {
  id: number
  title: string
  activity_group_id: number
  is_active: boolean
  priority: PRIORITY_ACTIVITY
}

export interface CreateUpdateTodoDTO extends TodoItemDTO {
  created_at: string
  updated_at: string
}
