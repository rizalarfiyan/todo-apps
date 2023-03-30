const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const APP_TITLE = 'To Do List App'

const ROUTE = {
  activity: '/',
  detailActivity: '/detail/:id',
}

const COMPONENT = {
  navigation: {
    scrollOffset: 100,
  },
}

export { API_BASE_URL, APP_TITLE, COMPONENT, ROUTE }
