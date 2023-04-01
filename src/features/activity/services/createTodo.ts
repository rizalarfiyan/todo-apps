import { useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'
import queryClient from '@libs/react-query'

import { MutationOptions } from '@/types/base'
import { CreateTodoDTO, CreateTodoRequest } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const createTodo = async ({
  data,
  signal,
}: AxiosRequestConfig<CreateTodoRequest>): Promise<CreateTodoDTO> => {
  return await axios
    .post('todo-items', data, {
      signal,
    })
    .then((res) => res.data)
}

export const useCreateTodo = (options?: MutationOptions<typeof createTodo>) => {
  return useMutation({
    mutationFn: createTodo,
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
