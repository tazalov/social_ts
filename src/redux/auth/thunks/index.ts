import { authAPI } from '../../../api/api'
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
