import { ProfileT } from '../reducer/types'
import { AddPostAT, SetProfileAT, SetStatusAT } from './types'

export const addPost = (postText: string): AddPostAT => ({
  type: 'social/profile/ADD_POST',
  postText,
})

export const setProfile = (profile: ProfileT): SetProfileAT => ({
  type: 'social/profile/SET_PROFILE',
  profile,
})

export const setStatus = (status: string): SetStatusAT => ({
  type: 'social/profile/SET_STATUS',
  status,
})
