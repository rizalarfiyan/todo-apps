import { useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'
import queryClient from '@libs/react-query'

import { MutationOptions } from '@/types/base'
import { CreateActivityDTO, CreateActivityRequest } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const createActivity = async ({
  data,
  signal,
}: AxiosRequestConfig<CreateActivityRequest>): Promise<CreateActivityDTO> => {
  return await axios
    .post('activity-groups', data, {
      signal,
    })
    .then((res) => res.data)
}

export const useCreateActivity = (
  options?: MutationOptions<typeof createActivity>
) => {
  return useMutation({
    mutationFn: createActivity,
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.activity],
      }),
    ...options,
  })
}
