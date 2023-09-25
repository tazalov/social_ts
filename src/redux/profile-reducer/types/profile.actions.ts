import { FriendT, PhotosT, ProfileT } from './profile.reducer'

export type ProfileAT = AddPostAT | SetProfileAT | SetProfileLoadingAT | SetFriendsProfileAT | SetStatusAT | SetPhotosAT

export interface AddPostAT {
  type: 'social/profile/ADD_POST'
  postText: string
}

export interface SetProfileAT {
  type: 'social/profile/SET_PROFILE'
  profile: ProfileT
}

export interface SetProfileLoadingAT {
  type: 'social/profile/SET_PROFILE_LOADING'
  isLoading: boolean
}

export interface SetFriendsProfileAT {
  type: 'social/profile/SET_FRIENDS_PROFILE'
  list: FriendT[]
  count: number
}

export interface SetStatusAT {
  type: 'social/profile/SET_STATUS'
  status: string
}

export interface SetPhotosAT {
  type: 'social/profile/SET_PHOTOS'
  photos: PhotosT
}
