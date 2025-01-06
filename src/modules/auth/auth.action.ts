import { AuthLogin, AuthUserInfo } from 'api'
import { Base } from 'modules/base'

export type Login = Base.Action<'auth.login', AuthLogin.Body>
export type LoginSuccess = Base.Action<'auth.login.success'>
export type LoginError = Base.Action<'auth.login.error', Base.Error>
export type LoginQuiet = Base.Action<'auth.login_quiet'>
export type Logout = Base.Action<'auth.logout'>

export type GetProfile = Base.Action<'auth.get_profile'>
export type GetProfileSuccess = Base.Action<'auth.get_profile.success', AuthUserInfo.Data>
export type GetProfileError = Base.Action<'auth.get_profile.error', Base.Error>
export type ResetProfile = Base.Action<'auth.reset_profile'>

export type AuthAction =
  | & Login
  | & LoginSuccess
  | & LoginError
  | & LoginQuiet
  | & Logout
  | & GetProfile
  | & GetProfileSuccess
  | & GetProfileError
  | & ResetProfile
