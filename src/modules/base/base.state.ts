import { Base } from './base.schema'

export const getInitialFieldState = <Data>(
  data: Data,
): Base.Field<Data> => ({
    meta: {
      status: 'idle',
      error: undefined,
    },
    data,
  })
