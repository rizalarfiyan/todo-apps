import { useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'
import queryClient from '@libs/react-query'

import { MutationOptions } from '@/types/base'
import { DeleteTodoRequest } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const deleteTodo = async ({
  data,
  signal,
}: AxiosRequestConfig<DeleteTodoRequest>): Promise<any> => {
  return await axios
    .delete('todo-items/' + data?.todoId, {
      signal,
    })
    .then((res) => res.data)
}

export const useDeleteTodo = (options?: MutationOptions<typeof deleteTodo>) => {
  return useMutation({
    mutationFn: deleteTodo,
    onSettled: (data, error, req) =>
      queryClient.invalidateQueries({
        queryKey: [
          QUERY_KEY.todo,
          {
            activity_group_id: req.data?.activityGroupId,
          },
        ],
      }),
    ...options,
  })
}
