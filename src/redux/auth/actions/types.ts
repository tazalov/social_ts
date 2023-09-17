import { AuthST } from '../reducer/types'

export type AuthAT = SetUserDataAT | SetCaptchaAT | SetErrorAT

export type PayloadT = {} | AuthST

export interface SetUserDataAT {
  type: 'social/auth/SET_USER_DATA'
  payload: PayloadT
  isAuth: boolean
}

export interface SetCaptchaAT {
  type: 'social/auth/SET_CAPTCHA'
  captcha: string
}

export interface SetErrorAT {
  type: 'social/auth/SET_ERROR'
  error: string
}
