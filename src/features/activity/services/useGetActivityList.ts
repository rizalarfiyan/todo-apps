import { useQuery } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'

import { QueryOptions, QueryParams } from '@/types/base'
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

const useActivityList = (
  params?: QueryParams,
  options?: QueryOptions<ActivityListDTO>
) => {
  return useQuery({
    queryKey: [QUERY_KEY.activity],
    queryFn: ({ signal }) => getActivityList({ signal, params }),
    ...options,
  })
}

export default useActivityList
