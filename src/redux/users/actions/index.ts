import { UserT } from '../reducer/types'
import {
  FollowAT,
  SetCurrentPageAT,
  SetLoadingPageAT,
  SetUsersAT,
  ToggleProgressFollowAT,
  UnfollowAT,
} from './types'

export const follow = (id: number): FollowAT => ({
  type: 'social/users/FOLLOW',
  id,
})

export const unfollow = (id: number): UnfollowAT => ({
  type: 'social/users/UNFOLLOW',
  id,
})

export const setUsers = (users: UserT[], totalCount: number): SetUsersAT => ({
  type: 'social/users/SET_USERS',
  users,
  totalCount,
})

export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({
  type: 'social/users/SET_CURRENT_PAGE',
  currentPage,
})

export const setLoadingPage = (isLoad: boolean): SetLoadingPageAT => ({
  type: 'social/users/SET_LOADING',
  isLoad,
})

export const toggleProgressFollow = (isFetch: boolean, id: number): ToggleProgressFollowAT => ({
  type: 'social/users/PROGRESS_FOLLOW',
  isFetch,
  id,
})
