import {
  FetchQueryOptions,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type KeyValue<T = any> = {
  [key: string]: T
}

export type UseQueryOptionsImpl<T, U = T> = UseQueryOptions<
  T,
  AxiosError<U>,
  T,
  QueryKey
>

export type FetchQueryOptionsImpl<T, U = T> = FetchQueryOptions<
  T,
  AxiosError<U>,
  T,
  QueryKey
>

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>

export type MutationOptions<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >

export type QueryParams = KeyValue<string | number | boolean>

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}
