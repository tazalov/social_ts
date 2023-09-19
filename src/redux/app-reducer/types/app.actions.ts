export type AuthAT = SetUserDataAT | SetCaptchaAT | SetErrorAT | InitializeAppAT

export type PayloadT = {
  id: number | null
  login: string | null
  email: string | null
}

export interface SetUserDataAT {
  type: 'social/app/SET_USER_DATA'
  payload: PayloadT
  isAuth: boolean
}

export interface SetCaptchaAT {
  type: 'social/app/SET_CAPTCHA'
  captcha: string
}

export interface SetErrorAT {
  type: 'social/app/SET_ERROR'
  error: string
}

export interface InitializeAppAT {
  type: 'social/app/INITIALIZE'
}
