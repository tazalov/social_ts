import { FriendT, ProfileT } from '../reducer/types'

export type ProfileAT = AddPostAT | SetProfileAT | SetFriendsProfileAT | SetStatusAT

export interface AddPostAT {
  type: 'social/profile/ADD_POST'
  postText: string
}

export interface SetProfileAT {
  type: 'social/profile/SET_PROFILE'
  profile: ProfileT
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
