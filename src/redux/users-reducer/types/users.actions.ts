import { UserT } from './users.reducer'

export type UsersAT =
  | FollowAT
  | UnfollowAT
  | SetUsersAT
  | SetCurrentPageAT
  | SetLoadingPageAT
  | ToggleProgressFollowAT

export interface FollowAT {
  type: 'social/users/FOLLOW'
  id: number
}

export interface UnfollowAT {
  type: 'social/users/UNFOLLOW'
  id: number
}

export interface SetUsersAT {
  type: 'social/users/SET_USERS'
  users: UserT[]
  totalCount: number
}

export interface SetCurrentPageAT {
  type: 'social/users/SET_CURRENT_PAGE'
  currentPage: number
}

export interface SetLoadingPageAT {
  type: 'social/users/SET_LOADING'
  isLoad: boolean
}

export interface ToggleProgressFollowAT {
  type: 'social/users/PROGRESS_FOLLOW'
  isFetch: boolean
  id: number
}
