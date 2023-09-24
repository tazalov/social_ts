import { profileAPI, ResultCodeE } from '../../../../api'
import { BaseThunkT } from '../../../store'
import { ProfileAT, SetFriendsProfileAT, SetStatusAT } from '../../types/profile.actions'
import { setFriendsProfile, setProfile, setProfileLoading, setStatus } from '../actions/profile.actions'

export const getUserProfile =
  (userId: string): BaseThunkT<ProfileAT> =>
  async (dispatch) => {
    dispatch(setProfileLoading(true))
    const data = await profileAPI.getProfile(userId)
    dispatch(setProfile(data))
    dispatch(setProfileLoading(false))
  }

export const getFriendsProfile = (): BaseThunkT<SetFriendsProfileAT> => async (dispatch) => {
  const friendsData = await profileAPI.getProfileFriends()
  if (!friendsData.error) {
    dispatch(setFriendsProfile(friendsData.items, friendsData.totalCount))
  }
}

export const getStatusProfile =
  (userId: string): BaseThunkT<SetStatusAT> =>
  async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
  }

export const updateStatusProfile =
  (status: string): BaseThunkT<SetStatusAT> =>
  async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodeE.Success) {
      dispatch(setStatus(status))
    }
  }
