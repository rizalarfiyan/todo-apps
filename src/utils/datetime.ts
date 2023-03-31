import dayjs from 'dayjs'
import 'dayjs/locale/id'

import { DATETIME_FORMAT } from '@/constants'

export const parseDate = (date: string) => {
  return dayjs(date).locale('id').format(DATETIME_FORMAT.base)
}
