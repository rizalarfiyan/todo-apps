import { PriorityActivityOpt } from './types/constants'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const APP_TITLE = 'To Do List App'

const ACTIVITY_GROUP = import.meta.env.VITE_ACTIVITY_GROUP || 'admin@admin.com'
const DEFAULT_ACTIVITY_TITLE = 'New Activity'

const ROUTE = {
  activity: '/',
  detailActivity: '/detail/:id',
}

const COMPONENT = {
  navigation: {
    scrollOffset: 50,
  },
  notification: {
    duration: 5000,
  },
}

const QUERY_KEY = {
  activity: 'activity',
  todo: 'todo',
}

const DATETIME_FORMAT = {
  base: 'DD MMMM YYYY',
}

enum PRIORITY_ACTIVITY {
  VeryHigh = 'very-high',
  High = 'high',
  Normal = 'normal',
  Low = 'low',
  VeryLow = 'very-low',
}

const PRIORITY_ACTIVITY_OPTIONS: PriorityActivityOpt[] = [
  {
    value: PRIORITY_ACTIVITY.VeryHigh,
    name: 'Very High',
    color: 'bg-red-500',
  },
  {
    value: PRIORITY_ACTIVITY.High,
    name: 'High',
    color: 'bg-orange-500',
  },
  {
    value: PRIORITY_ACTIVITY.Normal,
    name: 'Normal',
    color: 'bg-green-500',
  },
  {
    value: PRIORITY_ACTIVITY.Low,
    name: 'Low',
    color: 'bg-blue-500',
  },
  {
    value: PRIORITY_ACTIVITY.VeryLow,
    name: 'Very Low',
    color: 'bg-purple-500',
  },
]

const DEFAULT_PRIORITY_ACTIVITY = PRIORITY_ACTIVITY.Normal
const DEFAULT_PRIORITY_STATUS = true

export {
  ACTIVITY_GROUP,
  API_BASE_URL,
  APP_TITLE,
  COMPONENT,
  DATETIME_FORMAT,
  DEFAULT_ACTIVITY_TITLE,
  DEFAULT_PRIORITY_ACTIVITY,
  DEFAULT_PRIORITY_STATUS,
  PRIORITY_ACTIVITY,
  PRIORITY_ACTIVITY_OPTIONS,
  QUERY_KEY,
  ROUTE,
}
