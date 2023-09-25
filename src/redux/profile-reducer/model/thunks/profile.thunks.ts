import { profileAPI, ResultCodeE } from '../../../../api'
import { BaseThunkT } from '../../../store'
import { ProfileAT, SetFriendsProfileAT, SetPhotosAT, SetStatusAT } from '../../types/profile.actions'
import { ProfileT } from '../../types/profile.reducer'
import {
  setErrorUpdate,
  setFriendsProfile,
  setPhotoProfile,
  setProfile,
  setProfileLoading,
  setStatus,
} from '../actions/profile.actions'

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

export const updatePhotoProfile =
  (photo: File): BaseThunkT<SetPhotosAT> =>
  async (dispatch) => {
    const response = await profileAPI.updatePhoto(photo)
    const { resultCode, data } = response
    if (resultCode === ResultCodeE.Success) {
      dispatch(setPhotoProfile(data.photos))
    }
  }

export const updateProfile =
  (profile: Omit<ProfileT, 'photos'>): BaseThunkT<ProfileAT> =>
  async (dispatch, getState) => {
    const id = getState().app.id
    const response = await profileAPI.updateProfile(profile)
    const { resultCode, messages } = response
    if (resultCode === ResultCodeE.Success) {
      if (id) {
        await dispatch(getUserProfile(`${id}`))
      } else {
        console.error('id must be a number when sending the request')
      }
    } else {
      dispatch(setErrorUpdate(messages[0]))
    }
  }
