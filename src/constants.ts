const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const APP_TITLE = 'To Do List App'

const ACTIVITY_GROUP = import.meta.env.VITE_ACTIVITY_GROUP || 'admin@admin.com'

const ROUTE = {
  activity: '/',
  detailActivity: '/detail/:id',
}

const COMPONENT = {
  navigation: {
    scrollOffset: 50,
  },
}

const QUERY_KEY = {
  activity: 'activity',
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
  PRIORITY_ACTIVITY,
  QUERY_KEY,
  ROUTE,
}
