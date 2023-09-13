import { SetUserDataAT } from './types'

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
