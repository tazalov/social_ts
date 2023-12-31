import { notify } from 'reapop'
import { UpsertNotificationAction } from 'reapop/dist/reducers/notifications/actions'
import { Dispatch } from 'redux'

import { ResponseT, ResultCodeE, usersAPI } from '../../../../api'
import { BaseThunkT } from '../../../store'
import { UsersAT } from '../../types/users.actions'
import { follow, setLoadingPage, setUsers, toggleProgressFollow, unfollow } from '../actions/users.actions'

export const getUsers =
  (currentPage: number, pageSize: number): BaseThunkT<UsersAT | UpsertNotificationAction> =>
  async (dispatch) => {
    dispatch(setLoadingPage(true))
    try {
      const data = await usersAPI.getUsers(currentPage, pageSize)
      if (!data.error) {
        dispatch(setUsers(data.items, data.totalCount))
      } else {
        dispatch(notify(data.error, 'error'))
      }
    } catch (e: any) {
      dispatch(notify(e.message, 'error'))
    } finally {
      dispatch(setLoadingPage(false))
    }
  }

const _commonSubscribeFlow = async (
  id: number,
  method: (id: number) => Promise<ResponseT>,
  actionCreator: (id: number) => UsersAT,
  dispatch: Dispatch<UsersAT | UpsertNotificationAction>,
) => {
  try {
    dispatch(toggleProgressFollow(true, id))
    const data = await method(id)
    if (data.resultCode === ResultCodeE.Success) {
      dispatch(actionCreator(id))
    } else {
      dispatch(notify(data.messages[0], 'error'))
    }
  } catch (e: any) {
    dispatch(notify(e.message, 'error'))
  } finally {
    dispatch(toggleProgressFollow(false, id))
  }
}

export const setFollow =
  (id: number): BaseThunkT<UsersAT> =>
  async (dispatch) => {
    const method = usersAPI.followU.bind(usersAPI)
    await _commonSubscribeFlow(id, method, follow, dispatch)
  }

export const setUnfollow =
  (id: number): BaseThunkT<UsersAT> =>
  async (dispatch) => {
    const method = usersAPI.unfollowU.bind(usersAPI)
    await _commonSubscribeFlow(id, method, unfollow, dispatch)
  }
