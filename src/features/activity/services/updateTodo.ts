import { useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'
import queryClient from '@libs/react-query'

import { MutationOptions } from '@/types/base'
import { CreateUpdateTodoDTO, UpdateTodoRequest } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const updateTodo = async ({
  data,
  signal,
}: AxiosRequestConfig<UpdateTodoRequest>): Promise<CreateUpdateTodoDTO> => {
  return await axios
    .patch(
      'todo-items/' + data?.id,
      {
        title: data?.title,
        is_active: data?.is_active,
        priority: data?.priority,
      },
      {
        signal,
      }
    )
    .then((res) => res.data)
}

export const useUpdateTodo = (options?: MutationOptions<typeof updateTodo>) => {
  return useMutation({
    mutationFn: updateTodo,
    onSettled: (data, error, req) =>
      queryClient.invalidateQueries({
        queryKey: [
          QUERY_KEY.todo,
          {
            activity_group_id: req.data?.activity_group_id,
          },
        ],
      }),
    ...options,
  })
}
