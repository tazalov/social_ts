import { notify, setUpNotifications } from 'reapop'
import { UpsertNotificationAction } from 'reapop/dist/reducers/notifications/actions'

import { authAPI, ResultCodeE } from '../../../../api'
import { BaseThunkT } from '../../../store'
import { AuthAT } from '../../types/app.actions'
import { initialize, setCaptcha, setError, setUserData } from '../actions/app.actions'

export const initializeApp = (): BaseThunkT<AuthAT | UpsertNotificationAction> => async (dispatch) => {
  setUpNotifications({
    defaultProps: {
      position: 'bottom-left',
      dismissible: true,
      dismissAfter: 3000,
    },
  })
  await dispatch(getUserData())
  let promise1 = dispatch(getUserData())
  /*
   let promise2 = dispatch(something());
   let promise3 = dispatch(something());
   */
  Promise.all([promise1])
    .then(() => {
      dispatch(initialize())
    })
    .catch((error) => dispatch(notify(error, 'error')))
}

export const getUserData = (): BaseThunkT<AuthAT | UpsertNotificationAction> => async (dispatch) => {
  try {
    const data = await authAPI.getUserData()
    if (data.resultCode === ResultCodeE.Success) {
      const { id, login, email } = data.data
      dispatch(setUserData(id, login, email, true))
    } else {
      dispatch(setUserData(null, null, null, false))
    }
  } catch (e: any) {
    dispatch(notify(e.message, 'error'))
  }
}

export const loginUser =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
  ): BaseThunkT<AuthAT | UpsertNotificationAction> =>
  async (dispatch) => {
    try {
      const data = await authAPI.login(email, password, rememberMe, captcha)
      if (data.resultCode === ResultCodeE.Success) {
        await dispatch(getUserData())
        dispatch(notify('Success authorize', 'success'))
      } else if (data.resultCode === ResultCodeE.Error) {
        dispatch(setError(data.messages[0]))
        dispatch(notify(data.messages[0], 'error'))
      } else if (data.resultCode === ResultCodeE.Captcha) {
        dispatch(setError(data.messages[0]))
        const captcha = await authAPI.getCaptcha()
        dispatch(setCaptcha(captcha.url))
        dispatch(notify(data.messages[0], 'warning'))
      }
    } catch (e: any) {
      dispatch(notify(e.message, 'error'))
    }
  }

export const logoutUser = (): BaseThunkT<AuthAT | UpsertNotificationAction> => async (dispatch) => {
  try {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodeE.Success) {
      dispatch(setUserData(null, null, null, false))
    } else {
      throw new Error(data.messages[0])
    }
  } catch (e: any) {
    dispatch(notify(e.message, 'error'))
  }
}
