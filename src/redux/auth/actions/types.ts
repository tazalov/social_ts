import { AuthST } from '../reducer/types'

export type AuthAT = SetUserDataAT

export type PayloadT = {} | AuthST

export interface SetUserDataAT {
  type: 'social/auth/SET_USER_DATA'
  payload: PayloadT
  isAuth: boolean
}
