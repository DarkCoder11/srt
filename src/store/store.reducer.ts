import _reduce from 'lodash/reduce'
import { ReducersMapObject } from 'redux'

export const getReducer = (
  modules: Store.Modules,
) => _reduce(
  modules,
  (acc, module) => {
    if (module.name && module.reducer) {
      acc[module.name] = module.reducer as never
    }

    return acc
  },
  {} as ReducersMapObject,
)
