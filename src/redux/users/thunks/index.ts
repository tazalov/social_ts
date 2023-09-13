import { Dispatch } from 'redux'
import { ResponseT } from '../../../api'
import { usersAPI } from '../../../api'
import { BaseThunkT } from '../../store'
import { follow, setLoadingPage, setUsers, toggleProgressFollow, unfollow } from '../actions'
import { UsersAT } from '../actions/types'

export const getUsers =
  (currentPage: number, pageSize: number): BaseThunkT<UsersAT> =>
  async dispatch => {
    dispatch(setLoadingPage(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    if (!data.error) {
      dispatch(setUsers(data.items, data.totalCount))
      dispatch(setLoadingPage(false))
    }
  }

const _commonFollowUnfollowFlow = async (
  id: number,
  method: (id: number) => Promise<ResponseT>,
  actionCreator: (id: number) => UsersAT,
  dispatch: Dispatch<UsersAT>,
) => {
  dispatch(toggleProgressFollow(true, id))
  const data = await method(id)
  if (data.resultCode === 0) {
    dispatch(toggleProgressFollow(false, id))
    dispatch(actionCreator(id))
  }
}

export const setFollow =
  (id: number): BaseThunkT<UsersAT> =>
  async dispatch => {
    const method = usersAPI.followU.bind(usersAPI)
    await _commonFollowUnfollowFlow(id, method, follow, dispatch)
  }

export const setUnfollow =
  (id: number): BaseThunkT<UsersAT> =>
  async dispatch => {
    const method = usersAPI.unfollowU.bind(usersAPI)
    await _commonFollowUnfollowFlow(id, method, unfollow, dispatch)
  }
