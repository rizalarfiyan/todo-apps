import { useQuery } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'

import { QueryParams, UseQueryOptionsImpl } from '@/types/base'
import { TodoListDTO } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const getTodoList = async ({
  params,
  signal,
}: AxiosRequestConfig): Promise<TodoListDTO> => {
  return await axios
    .get('todo-items', {
      params,
      signal,
    })
    .then((res) => res.data)
}

export const useTodoList = (
  params?: QueryParams,
  options?: UseQueryOptionsImpl<TodoListDTO>
) => {
  return useQuery({
    queryKey: [QUERY_KEY.todo, params],
    queryFn: ({ signal }) => getTodoList({ signal, params }),
    ...options,
  })
}
