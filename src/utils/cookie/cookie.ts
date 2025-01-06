import jsCookie from 'js-cookie'

import { AUTH_ACCESS_TOKEN_COOKIE } from './cookie.const'

export const setAuthAccessToken = (
  value: string,
) => {
  jsCookie.set(
    AUTH_ACCESS_TOKEN_COOKIE.key,
    value,
  )
}

export const getAuthAccessToken = () => (
  jsCookie.get(AUTH_ACCESS_TOKEN_COOKIE.key)
)

export const removeAuthAccessToken = () => (
  jsCookie.remove(AUTH_ACCESS_TOKEN_COOKIE.key)
)

export const getAuthAccessTokenRequestHeaderKey = () => (
  AUTH_ACCESS_TOKEN_COOKIE.requestHeaderKey
)
