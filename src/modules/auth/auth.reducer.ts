import { AuthAction } from './auth.action'
import { AuthSchema } from './auth.schema'
import { initialState } from './auth.state'

export const reducer = (
  state = initialState,
  action: AuthAction | void = undefined,
): AuthSchema => {
  switch (action?.type) {
    case 'auth.login': {
      return {
        ...state,
        login: {
          ...state.login,
          meta: {
            ...state.login.meta,
            status: 'loading',
          },
          data: initialState.login.data,
        },
      }
    }

    case 'auth.login.success': {
      return {
        ...state,
        login: {
          ...state.login,
          meta: {
            ...initialState.login.meta,
            status: 'success',
          },
        },
      }
    }

    case 'auth.login.error': {
      return {
        ...state,
        login: {
          ...state.login,
          meta: {
            ...state.login.meta,
            status: 'error',
            error: action.payload,
          },
        },
      }
    }

    case 'auth.logout': {
      return {
        ...state,
        login: initialState.login,
      }
    }

    case 'auth.get_profile': {
      return {
        ...state,
        profile: {
          ...state.profile,
          meta: {
            ...state.profile.meta,
            status: 'loading',
          },
          data: initialState.profile.data,
        },
      }
    }

    case 'auth.get_profile.success': {
      return {
        ...state,
        profile: {
          ...state.profile,
          meta: {
            ...initialState.profile.meta,
            status: 'success',
          },
          data: action.payload,
        },
      }
    }

    case 'auth.get_profile.error': {
      return {
        ...state,
        profile: {
          ...initialState.profile,
          meta: {
            ...state.profile.meta,
            status: 'error',
            error: action.payload,
          },
        },
      }
    }

    case 'auth.reset_profile': {
      return {
        ...state,
        profile: initialState.profile,
      }
    }

    default: {
      return state
    }
  }
}
