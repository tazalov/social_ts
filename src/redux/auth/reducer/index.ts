import { AuthAT } from '../actions/types'
import { AuthST } from './types'

const initialState: AuthST = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: '',
  error: '',
}

export const authReducer = (state = initialState, action: AuthAT) => {
  switch (action.type) {
    case 'social/auth/SET_USER_DATA': {
      return {
        ...state,
        ...action.payload,
        isAuth: action.isAuth,
      }
    }
    case 'social/auth/SET_CAPTCHA': {
      return {
        ...state,
        captcha: action.captcha,
      }
    }
    case 'social/auth/SET_ERROR': {
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return { ...state }
    }
  }
}
