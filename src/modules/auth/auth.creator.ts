import {
  Login, LoginSuccess, LoginError, LoginQuiet, Logout,
  GetProfile, GetProfileSuccess, GetProfileError, ResetProfile,
} from './auth.action'

export const creator = {
  login: (payload: Login['payload']): Login => ({
    type: 'auth.login',
    payload,
  }),
  loginSuccess: (): LoginSuccess => ({
    type: 'auth.login.success',
    payload: undefined,
  }),
  loginError: (payload: LoginError['payload']): LoginError => ({
    type: 'auth.login.error',
    payload,
  }),
  loginQuiet: (): LoginQuiet => ({
    type: 'auth.login_quiet',
    payload: undefined,
  }),
  logout: (): Logout => ({
    type: 'auth.logout',
    payload: undefined,
  }),

  getProfile: (): GetProfile => ({
    type: 'auth.get_profile',
    payload: undefined,
  }),
  getProfileSuccess: (payload: GetProfileSuccess['payload']): GetProfileSuccess => ({
    type: 'auth.get_profile.success',
    payload,
  }),
  getProfileError: (payload: GetProfileError['payload']): GetProfileError => ({
    type: 'auth.get_profile.error',
    payload,
  }),
  resetProfile: (): ResetProfile => ({
    type: 'auth.reset_profile',
    payload: undefined,
  }),
}
