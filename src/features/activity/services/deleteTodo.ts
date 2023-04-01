import { useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'
import queryClient from '@libs/react-query'

import { MutationOptions } from '@/types/base'

import { QUERY_KEY } from '@/constants'

export const deleteTodo = async ({
  data,
  signal,
}: AxiosRequestConfig<number>): Promise<any> => {
  return await axios
    .delete('todo-items/' + data, {
      signal,
    })
    .then((res) => res.data)
}

export const useDeleteTodo = (options?: MutationOptions<typeof deleteTodo>) => {
  return useMutation({
    mutationFn: deleteTodo,
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.todo],
      }),
    ...options,
  })
}
