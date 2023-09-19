import { InitializeAppAT, SetCaptchaAT, SetErrorAT, SetUserDataAT } from '../../types/app.actions'

export const setUserData = (
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
): SetUserDataAT => ({
  type: 'social/app/SET_USER_DATA',
  payload: {
    id,
    login,
    email,
  },
  isAuth,
})

export const setCaptcha = (captcha: string): SetCaptchaAT => ({
  type: 'social/app/SET_CAPTCHA',
  captcha,
})

export const setError = (error: string): SetErrorAT => ({
  type: 'social/app/SET_ERROR',
  error,
})

export const initialize = (): InitializeAppAT => ({
  type: 'social/app/INITIALIZE',
})
