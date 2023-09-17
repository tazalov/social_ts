import { authAPI, ResultCodeE } from '../../../api'
import { BaseThunkT } from '../../store'
import { setCaptcha, setError, setUserData } from '../actions'
import { AuthAT } from '../actions/types'

export const getUserData = (): BaseThunkT<AuthAT> => async dispatch => {
  const data = await authAPI.getUserData()
  if (data.resultCode === ResultCodeE.Success) {
    const { id, login, email } = data.data
    dispatch(setUserData(id, login, email, true))
  } else {
    dispatch(setUserData(null, null, null, false))
  }
}

export const loginUser =
  (email: string, password: string, rememberMe: boolean, captcha: string): BaseThunkT<AuthAT> =>
  async dispatch => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeE.Success) {
      await dispatch(getUserData())
    } else if (data.resultCode === ResultCodeE.Error) {
      dispatch(setError(data.messages[0]))
    } else if (data.resultCode === ResultCodeE.Captcha) {
      dispatch(setError(data.messages[0]))
      const captcha = await authAPI.getCaptcha()
      dispatch(setCaptcha(captcha.url))
    }
  }

export const logoutUser = (): BaseThunkT<AuthAT> => async dispatch => {
  const data = await authAPI.logout()
  if (data.resultCode === ResultCodeE.Success) {
    dispatch(setUserData(null, null, null, false))
  }
}
