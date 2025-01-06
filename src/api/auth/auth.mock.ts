import { Base, mockAdapter } from 'api/base'

import { LOGIN_PATH, USER_INFO_PATH } from './auth.const'
import { AuthLogin, AuthUserInfo } from './auth.interface'

const token = 'xxx'

mockAdapter
  .onPost(LOGIN_PATH).reply<AuthLogin.Data>(
  Base.Status.SUCCESS,
  { token },
)
  .onGet(USER_INFO_PATH).reply<AuthUserInfo.Data>(
  Base.Status.SUCCESS,
  {
    token,
    id: 1,
    metadata: {
      email: 'john.doe@gmail.com',
      password: '<ENCRYPTED_PASSWORD>',
    },
    created_at: 1735762200,
  },
)
