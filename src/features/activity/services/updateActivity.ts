import { useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'
import queryClient from '@libs/react-query'

import { MutationOptions } from '@/types/base'
import { CreateUpdateActivityDTO, UpdateActivityRequest } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const updateActivity = async ({
  data,
  signal,
}: AxiosRequestConfig<UpdateActivityRequest>): Promise<CreateUpdateActivityDTO> => {
  return await axios
    .patch(
      'activity-groups/' + data?.id,
      {
        title: data?.title,
      },
      {
        signal,
      }
    )
    .then((res) => res.data)
}

export const useUpdateActivity = (
  options?: MutationOptions<typeof updateActivity>
) => {
  return useMutation({
    mutationFn: updateActivity,
    onSettled: (data, error, req) =>
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.activity, req.data?.id],
      }),
    ...options,
  })
}
