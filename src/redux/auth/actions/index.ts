import { SetCaptchaAT, SetErrorAT, SetUserDataAT } from './types'

export const setUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
): SetUserDataAT => ({
  type: 'social/auth/SET_USER_DATA',
  payload: {
    id,
    login,
    email,
  },
  isAuth,
})

export const setCaptcha = (captcha: string): SetCaptchaAT => ({
  type: 'social/auth/SET_CAPTCHA',
  captcha,
})

export const setError = (error: string): SetErrorAT => ({
  type: 'social/auth/SET_ERROR',
  error,
})
