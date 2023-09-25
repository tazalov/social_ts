import {
  AddPostAT,
  SetErrorUpdateAT,
  SetFriendsProfileAT,
  SetPhotosAT,
  SetProfileAT,
  SetProfileLoadingAT,
  SetStatusAT,
} from '../../types/profile.actions'
import { FriendT, PhotosT, ProfileT } from '../../types/profile.reducer'

export const addPost = (postText: string): AddPostAT => ({
  type: 'social/profile/ADD_POST',
  postText,
})

export const setProfile = (profile: ProfileT): SetProfileAT => ({
  type: 'social/profile/SET_PROFILE',
  profile,
})

export const setProfileLoading = (isLoading: boolean): SetProfileLoadingAT => ({
  type: 'social/profile/SET_PROFILE_LOADING',
  isLoading,
})

export const setStatus = (status: string): SetStatusAT => ({
  type: 'social/profile/SET_STATUS',
  status,
})

export const setFriendsProfile = (list: FriendT[], count: number): SetFriendsProfileAT => ({
  type: 'social/profile/SET_FRIENDS_PROFILE',
  list,
  count,
})

export const setPhotoProfile = (photos: PhotosT): SetPhotosAT => ({
  type: 'social/profile/SET_PHOTOS',
  photos,
})

export const setErrorUpdate = (error: string): SetErrorUpdateAT => ({
  type: 'social/profile/SET_ERROR',
  error,
})
