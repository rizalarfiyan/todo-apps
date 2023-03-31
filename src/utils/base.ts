import { UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

export const routeReplace = (
  path: string,
  ...url: (string | number)[]
): string => {
  const data = Array.from(path.matchAll(/:[^\\/]+/g), (m) => m[0])
  return data.reduce((acc, val, idx) => {
    if (url?.[idx]) {
      return acc.replace(val, url[idx].toString())
    }
    return acc
  }, path)
}

export const getResultError = (
  errors: any,
  defaultError = 'Terjadi kesalahan!'
): string => {
  const error = errors as AxiosError<{
    message: string
  }>
  return error.response?.data?.message || error?.message || defaultError
}

export const isNotFound = (req: UseQueryResult<unknown, AxiosError>) => {
  return req.isError && req.error?.response?.status === 404
}

/* 
Original code:
https://github.com/gregberge/react-merge-refs/blob/main/src/index.tsx
*/

export function mergeRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    })
  }
}
