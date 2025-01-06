import { apiBase } from 'api/base'
import { cookie } from 'utils'

apiBase.interceptors.request.use(
  async (config) => {
    const accessToken = cookie.getAuthAccessToken()

    if (accessToken) {
      config.headers.set(
        cookie.getAuthAccessTokenRequestHeaderKey(),
        accessToken,
      )
    }

    return config
  },
  (error) => Promise.reject(error),
)
