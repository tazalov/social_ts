import { profileAPI } from '../../../api'
import { BaseThunkT } from '../../store'
import { setFriendsProfile, setProfile, setStatus } from '../actions'
import { ProfileAT, SetFriendsProfileAT, SetStatusAT } from '../actions/types'

export const getUserProfile =
  (userId: string): BaseThunkT<ProfileAT> =>
  async dispatch => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setProfile(data))
  }

export const getFriendsProfile = (): BaseThunkT<SetFriendsProfileAT> => async dispatch => {
  const friendsData = await profileAPI.getProfileFriends()
  if (!friendsData.error) {
    dispatch(setFriendsProfile(friendsData.items, friendsData.totalCount))
  }
}

export const getStatusProfile =
  (userId: string): BaseThunkT<SetStatusAT> =>
  async dispatch => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
  }

export const updateStatusProfile =
  (status: string): BaseThunkT<SetStatusAT> =>
  async dispatch => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
