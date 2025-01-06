export const AUTH_ACCESS_TOKEN_COOKIE = {
  key: 'auth_access_token',
  requestHeaderKey: process.env.ACCESS_TOKEN_HEADER_KEY,
  lifeTime: 1_000 * 60 * 60 * 24,
}
