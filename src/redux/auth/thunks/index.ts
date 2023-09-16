import { authAPI } from '../../../api'
import { BaseThunkT } from '../../store'
import { setUserData } from '../actions'
import { AuthAT } from '../actions/types'

export const getUserData = (): BaseThunkT<AuthAT> => async dispatch => {
  const data = await authAPI.getUserData()
  if (data.resultCode === 0) {
    const { id, login, email } = data.data
    dispatch(setUserData(id, login, email, true))
  } else {
    dispatch(setUserData(null, null, null, false))
  }
}

export const loginUser =
  (email: string, password: string, rememberMe: boolean): BaseThunkT<AuthAT> =>
  async dispatch => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
      await dispatch(getUserData())
    }
  }

export const logoutUser = (): BaseThunkT<AuthAT> => async dispatch => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}
