import { baseSelector } from 'modules/base'

import { AuthSlice } from './auth.schema'

export const useIsLoginIdle = ({ auth }: AuthSlice) => (
  baseSelector.useIsIdle(auth.login)
)

export const useIsLoginLoading = ({ auth }: AuthSlice) => (
  baseSelector.useIsLoading(auth.login)
)

export const useIsLoginSuccess = ({ auth }: AuthSlice) => (
  baseSelector.useIsSuccess(auth.login)
)

export const useIsLoginError = ({ auth }: AuthSlice) => (
  baseSelector.useIsError(auth.login)
)

export const useLoginErrorMessage = ({ auth }: AuthSlice) => (
  baseSelector.useErrorMessage(auth.login)
)

export const useIsProfileIdle = ({ auth }: AuthSlice) => (
  baseSelector.useIsIdle(auth.profile)
)

export const useIsProfileLoading = ({ auth }: AuthSlice) => (
  baseSelector.useIsLoading(auth.profile)
)

export const useIsProfileSuccess = ({ auth }: AuthSlice) => (
  baseSelector.useIsSuccess(auth.profile)
)

export const useIsProfileError = ({ auth }: AuthSlice) => (
  baseSelector.useIsError(auth.profile)
)

export const useProfileErrorMessage = ({ auth }: AuthSlice) => (
  baseSelector.useErrorMessage(auth.profile)
)

export const useProfile = ({ auth }: AuthSlice) => (
  auth.profile
)

export const useProfileMetadata = baseSelector.create(
  [useProfile],
  (profile) => profile.data?.metadata,
)
