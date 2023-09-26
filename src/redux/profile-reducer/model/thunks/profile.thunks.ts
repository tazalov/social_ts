import { notify } from 'reapop'
import { UpsertNotificationAction } from 'reapop/dist/reducers/notifications/actions'

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
  (userId: string): BaseThunkT<ProfileAT | UpsertNotificationAction> =>
  async (dispatch) => {
    dispatch(setProfileLoading(true))
    try {
      const data = await profileAPI.getProfile(userId)
      dispatch(setProfile(data))
    } catch (e: any) {
      dispatch(notify(e.message, 'error'))
    } finally {
      dispatch(setProfileLoading(false))
    }
  }

export const getFriendsProfile = (): BaseThunkT<SetFriendsProfileAT | UpsertNotificationAction> => async (dispatch) => {
  try {
    const friendsData = await profileAPI.getProfileFriends()
    if (!friendsData.error) {
      dispatch(setFriendsProfile(friendsData.items, friendsData.totalCount))
    } else {
      dispatch(notify(friendsData.error, 'error'))
    }
  } catch (e: any) {
    dispatch(notify(e.message, 'error'))
  }
}

export const getStatusProfile =
  (userId: string): BaseThunkT<SetStatusAT | UpsertNotificationAction> =>
  async (dispatch) => {
    try {
      const data = await profileAPI.getStatus(userId)
      dispatch(setStatus(data))
    } catch (e: any) {
      dispatch(notify(e.message, 'error'))
    }
  }

export const updateStatusProfile =
  (status: string): BaseThunkT<SetStatusAT | UpsertNotificationAction> =>
  async (dispatch) => {
    try {
      const data = await profileAPI.updateStatus(status)
      if (data.resultCode === ResultCodeE.Success) {
        dispatch(setStatus(status))
      } else {
        dispatch(notify(data.messages[0], 'error'))
      }
    } catch (e: any) {
      dispatch(notify(e.message, 'error'))
    }
  }

export const updatePhotoProfile =
  (photo: File): BaseThunkT<SetPhotosAT | UpsertNotificationAction> =>
  async (dispatch) => {
    try {
      const response = await profileAPI.updatePhoto(photo)
      const { resultCode, data } = response
      if (resultCode === ResultCodeE.Success) {
        dispatch(setPhotoProfile(data.photos))
      } else {
        dispatch(notify(response.messages[0], 'error'))
      }
    } catch (e: any) {
      dispatch(notify(e.message, 'error'))
    }
  }

export const updateProfile =
  (profile: Omit<ProfileT, 'photos'>): BaseThunkT<ProfileAT | UpsertNotificationAction> =>
  async (dispatch, getState) => {
    const id = getState().app.id
    try {
      const response = await profileAPI.updateProfile(profile)
      const { resultCode, messages } = response
      if (resultCode === ResultCodeE.Success) {
        if (id) {
          await dispatch(getUserProfile(`${id}`))
        } else {
          dispatch(notify('id must be a number when sending the request', 'error'))
        }
      } else {
        dispatch(setErrorUpdate(messages[0]))
        dispatch(notify(messages[0], 'error'))
      }
    } catch (e: any) {
      dispatch(notify(e.message, 'error'))
    }
  }
