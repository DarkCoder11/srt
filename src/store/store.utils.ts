import _entries from 'lodash/entries'
import _filter from 'lodash/filter'
import _map from 'lodash/map'

export const prepareModules = (
  rawModules: Store.RawModules,
): Store.Modules => _map(
  _entries(rawModules),
  ([name, rawModule]) => ({
    ...rawModule,
    name,
  }),
)

export const retrieveSagas = (
  modules: Store.Modules,
) => _map(
  _filter(
    modules,
    (module) => !!module.saga,
  ) as Store.ModuleWithSaga[],
  (module) => module.saga,
)
