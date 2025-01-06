import { call, fork, put, spawn, takeLatest } from 'redux-saga/effects'

import { authApi, AuthLogin, apiUtils, Base, AuthUserInfo } from 'api'
import { cookie } from 'utils'

import {
  Login, LoginSuccess, LoginQuiet, Logout,
  GetProfile,
} from './auth.action'
import { creator } from './auth.creator'

function* loginWorker(action: Login) {
  let message = ''

  try {
    const {
      status, statusText, data,
    }: AuthLogin.Response = yield call(authApi.login, action.payload)

    if (status === Base.Status.SUCCESS) {
      yield call(cookie.setAuthAccessToken, data.token)

      yield put(creator.loginSuccess())
    } else if (statusText) {
      message = statusText
    }
  } catch (exception) {
    message = apiUtils.getErrorMessage(exception)
  } finally {
    if (message) {
      yield put(creator.loginError({ message }))
    }
  }
}

function* loginWatcher() {
  yield takeLatest<Login>(
    'auth.login' as Login['type'],
    loginWorker,
  )
}

function* loginSuccessWorker() {
  yield put(creator.getProfile())
}

function* loginSuccessWatcher() {
  yield takeLatest<LoginSuccess>(
    'auth.login.success' as LoginSuccess['type'],
    loginSuccessWorker,
  )
}

function* logoutWorker() {
  yield put(creator.resetProfile())

  yield call(cookie.removeAuthAccessToken)
}

function* logoutWatcher() {
  yield takeLatest<Logout>(
    'auth.logout' as Logout['type'],
    logoutWorker,
  )
}

function* getProfileWorker() {
  let message = ''

  try {
    const {
      status, statusText, data,
    }: AuthUserInfo.Response = yield call(authApi.getUserInfo)

    if (status === Base.Status.SUCCESS) {
      yield put(creator.getProfileSuccess(data))
    } else if (statusText) {
      message = statusText
    }
  } catch (exception) {
    message = apiUtils.getErrorMessage(exception)
  } finally {
    if (message) {
      yield put(creator.getProfileError({ message }))
    }
  }
}

function* getProfileWatcher() {
  yield takeLatest<GetProfile>(
    'auth.get_profile' as GetProfile['type'],
    getProfileWorker,
  )
}

function* quietLoginWorker() {
  const token: ReturnType<typeof cookie.getAuthAccessToken> = yield call(cookie.getAuthAccessToken)

  if (token) {
    yield put(creator.loginSuccess())
  }
}

function* quietLoginWatcher() {
  yield takeLatest<LoginQuiet>(
    'auth.login_quiet' as LoginQuiet['type'],
    quietLoginWorker,
  )
}

export function* saga() {
  yield spawn(loginWatcher)
  yield spawn(loginSuccessWatcher)
  yield spawn(logoutWatcher)
  yield spawn(quietLoginWatcher)
  yield spawn(getProfileWatcher)

  yield fork(quietLoginWorker)
}
