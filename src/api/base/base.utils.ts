import { AxiosError } from 'axios'

import { Base } from './base.interface'

export const apiUtils = {
  getErrorMessage: (
    sourceError: unknown,
  ) => (
    (sourceError as AxiosError<Base.Error>).response?.data.message
    || ''
  ),
}
