import _map from 'lodash/map'
import { spawn, all } from 'redux-saga/effects'

import { retrieveSagas } from './store.utils'

export const getSaga = (
  modules: Store.Modules,
) => function* sagas() {
  yield all(_map(
    retrieveSagas(modules),
    spawn,
  ))
}
