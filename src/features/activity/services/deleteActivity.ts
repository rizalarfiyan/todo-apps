import { useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'
import queryClient from '@libs/react-query'

import { MutationOptions } from '@/types/base'

import { QUERY_KEY } from '@/constants'

export const deleteActivity = async ({
  data,
  signal,
}: AxiosRequestConfig<number>): Promise<any> => {
  return await axios
    .delete('activity-groups/' + data, {
      signal,
    })
    .then((res) => res.data)
}

export const useDeleteActivity = (
  options?: MutationOptions<typeof deleteActivity>
) => {
  return useMutation({
    mutationFn: deleteActivity,
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.activity],
      }),
    ...options,
  })
}
