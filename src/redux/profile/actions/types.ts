import { ProfileT } from '../reducer/types'

export type ProfileAT = AddPostAT | SetProfileAT | SetStatusAT

export interface AddPostAT {
  type: 'social/profile/ADD_POST'
  postText: string
}

export interface SetProfileAT {
  type: 'social/profile/SET_PROFILE'
  profile: ProfileT
}

export interface SetStatusAT {
  type: 'social/profile/SET_STATUS'
  status: string
}
