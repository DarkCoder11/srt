import { getInitialFieldState } from 'modules/base'

import { AuthSchema } from './auth.schema'

export const initialState: AuthSchema = {
  login: getInitialFieldState(undefined),
  profile: getInitialFieldState(undefined),
}
