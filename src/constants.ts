const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const APP_TITLE = 'Todo Apps'

const ROUTE = {
  activity: '/',
  detailActivity: '/detail/:id',
}

export { API_BASE_URL, APP_TITLE, ROUTE }
