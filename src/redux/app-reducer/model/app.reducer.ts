import { AuthAT } from '../types/app.actions'
import { AppST } from '../types/app.reducer'

const initialState: AppST = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: '',
  error: '',
  isInitialized: false,
}

export const appReducer = (state = initialState, action: AuthAT) => {
  switch (action.type) {
    case 'social/app/SET_USER_DATA': {
      return {
        ...state,
        ...action.payload,
        isAuth: action.isAuth,
      }
    }
    case 'social/app/SET_CAPTCHA': {
      return {
        ...state,
        captcha: action.captcha,
      }
    }
    case 'social/app/SET_ERROR': {
      return {
        ...state,
        error: action.error,
      }
    }
    case 'social/app/INITIALIZE': {
      return {
        ...state,
        isInitialized: true,
      }
    }
    default: {
      return state
    }
  }
}
