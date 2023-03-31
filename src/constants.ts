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

export {
  ACTIVITY_GROUP,
  API_BASE_URL,
  APP_TITLE,
  COMPONENT,
  DATETIME_FORMAT,
  DEFAULT_ACTIVITY_TITLE,
  PRIORITY_ACTIVITY,
  QUERY_KEY,
  ROUTE,
}
