import { createSelector } from '@reduxjs/toolkit'

import { Base } from './base.schema'

export const baseSelector = {
  create: createSelector,

  useIsIdle: <Data>(
    field: Base.Field<Data>,
  ) => field.meta.status === 'idle',
  useIsLoading: <Data>(
    field: Base.Field<Data>,
  ) => field.meta.status === 'loading',
  useIsSuccess: <Data>(
    field: Base.Field<Data>,
  ) => field.meta.status === 'success',
  useIsError: <Data>(
    field: Base.Field<Data>,
  ) => field.meta.status === 'error',

  useErrorMessage: <Data>(
    field: Base.Field<Data>,
  ) => field.meta.error?.message || '',

  useData: <Data>(
    field: Base.Field<Data>,
  ) => field.data,
}
