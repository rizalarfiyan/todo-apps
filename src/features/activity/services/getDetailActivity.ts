import { useQuery } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

import axios from '@libs/axios'

import { UseQueryOptionsImpl } from '@/types/base'
import { DetailActivityDTO } from '@dto/activity'

import { QUERY_KEY } from '@/constants'

export const getActivityDetail = async (
  id: string,
  { signal }: AxiosRequestConfig
): Promise<DetailActivityDTO> => {
  return await axios
    .get('activity-groups/' + id, {
      signal,
    })
    .then((res) => res.data)
}

export const useActivityDetail = (
  id: string,
  options?: UseQueryOptionsImpl<DetailActivityDTO>
) => {
  return useQuery({
    queryKey: [QUERY_KEY.activity, id],
    queryFn: ({ signal }) => getActivityDetail(id, { signal }),
    ...options,
  })
}
