export interface BaseListDTO<T> {
  total: number
  limit: number
  skip: number
  data: T
}
