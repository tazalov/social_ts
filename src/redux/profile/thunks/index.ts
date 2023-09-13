import { profileAPI } from '../../../api/api'
import { BaseThunkT } from '../../store'
import { setProfile } from '../actions'
import { ProfileAT } from '../actions/types'

export const getUserProfile =
  (userId: string): BaseThunkT<ProfileAT> =>
  async dispatch => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setProfile(data))
  }
