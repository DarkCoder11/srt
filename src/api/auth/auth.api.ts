import { apiBase } from 'api/base'

import { LOGIN_PATH, USER_INFO_PATH } from './auth.const'
import { AuthLogin, AuthUserInfo } from './auth.interface'

export const login: AuthLogin.Callee = (body) => apiBase.post(LOGIN_PATH, body)

export const getUserInfo: AuthUserInfo.Callee = () => apiBase.get(USER_INFO_PATH)
