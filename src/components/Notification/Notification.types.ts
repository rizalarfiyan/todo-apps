import { Dispatch } from 'react'

import { IconType } from '@components/Icon'

import { ActionMap } from '@/types/base'

export enum NotificationType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING',
}

export enum NotificationAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  REMOVE_ALL = 'REMOVE_ALL',
}

export const NotificationPosition = {
  'top-left': 'top-left',
  'top-right': 'top-right',
  'bottom-right': 'bottom-right',
  'bottom-left': 'bottom-left',
  'top-middle': 'top-middle',
  'bottom-middle': 'bottom-middle',
} as const

export type NotificationPosition =
  (typeof NotificationPosition)[keyof typeof NotificationPosition]

export type NotificationPositionMap<T> = {
  [position in keyof typeof NotificationPosition]: T
}

export interface NotificationData {
  id: string
  content: NotificationContent
  type: NotificationType
}

export interface NotificationContent {
  message: string
  duration: number
}

export interface NotificationContextImpl {
  notification: NotificationData[]
  notificationDispatch: Dispatch<NotificationActions>
}

export type NotificationPayload = {
  [NotificationAction.ADD]: {
    id?: string
    content?: {
      message: string
      duration?: number
    }
    type: string
  }
  [NotificationAction.REMOVE]: {
    id: string
  }
  [NotificationAction.REMOVE_ALL]: any
}

export interface NotificationHooks {
  success: (message: string, duration?: number) => void
  error: (message: string, duration?: number) => void
  info: (message: string, duration?: number) => void
  warning: (message: string, duration?: number) => void
}

export type NotificationActions =
  ActionMap<NotificationPayload>[keyof ActionMap<NotificationPayload>]

export interface NotificationWrapperProps
  extends React.HTMLProps<HTMLDivElement> {
  position?: NotificationPosition
  actionData: NotificationContextImpl
}

export interface NotificationMessageProps {
  id: string
  type: NotificationType
  message: string
  duration: number
  onRemove: (id: string) => void
}

export interface NotificationMessageStyle {
  base: string
  iconstyle: string
  icon: IconType
}
