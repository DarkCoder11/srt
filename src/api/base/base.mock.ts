import AxiosMockAdapter from 'axios-mock-adapter'

import { apiBase } from './base.api'

export const mockAdapter = new AxiosMockAdapter(apiBase, {
  delayResponse: 1_000,
})
