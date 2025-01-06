import { Base } from 'api/base'

import { UserInfo, UserInfoMetadata } from './auth.model'

export namespace AuthLogin {
  export type Body = Pick<
  UserInfoMetadata,
  | 'email'
  | 'password'
  >

  export type Data = Pick<
  UserInfo,
  | 'token'
  >

  export type Response = Base.Response<Data>

  export type Callee = Base.Callee<Body, Response>
}

export namespace AuthUserInfo {
  export type Data = UserInfo

  export type Response = Base.Response<Data>

  export type Callee = Base.Callee<void, Response>
}
