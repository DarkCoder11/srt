import { AuthUserInfo } from 'api'
import { Base } from 'modules/base'

export type AuthSchema = {
  login: Base.Field
  profile: Base.Field<AuthUserInfo.Data | undefined>
}

export type AuthSlice = Base.Slice<'auth', AuthSchema>
