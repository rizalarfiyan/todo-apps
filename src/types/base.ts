import { QueryKey, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type KeyValue<T = any> = {
  [key: string]: T
}

export type QueryOptions<T, U = T> = UseQueryOptions<
  T,
  AxiosError<U>,
  T,
  QueryKey
>

export type QueryParams = KeyValue<string | number | boolean>
