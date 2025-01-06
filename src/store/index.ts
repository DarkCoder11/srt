import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import * as modules from 'modules'

import { getReducer } from './store.reducer'
import { getSaga } from './store.saga'
import { prepareModules } from './store.utils'

const decoratedModules = prepareModules(modules)

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: getReducer(decoratedModules),
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(sagaMiddleware)
  ),
})

sagaMiddleware.run(getSaga(decoratedModules))
