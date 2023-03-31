import { useQuery } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'

import { QueryParams, UseQueryOptionsImpl } from '@/types/base'
import { ActivityListDTO } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const getActivityList = async ({
  params,
  signal,
}: AxiosRequestConfig): Promise<ActivityListDTO> => {
  return await axios
    .get('activity-groups', {
      params,
      signal,
    })
    .then((res) => res.data)
}

export const useActivityList = (
  params?: QueryParams,
  options?: UseQueryOptionsImpl<ActivityListDTO>
) => {
  return useQuery({
    queryKey: [QUERY_KEY.activity],
    queryFn: ({ signal }) => getActivityList({ signal, params }),
    ...options,
  })
}
