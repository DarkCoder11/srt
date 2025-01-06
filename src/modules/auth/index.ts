import { creator as actions } from './auth.creator'
import { reducer } from './auth.reducer'
import { saga } from './auth.saga'
import * as selectors from './auth.selector'

export const auth = {
  ...selectors,
  actions,
  reducer,
  saga,
}

export * as AuthModule from './auth.action'
