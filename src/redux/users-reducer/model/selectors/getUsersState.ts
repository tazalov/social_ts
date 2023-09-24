import { createSelector } from 'reselect'

import { RootStateT } from '../../../store'
import { UsersST } from '../../types/users.reducer'

export const getUsersState = (state: RootStateT): UsersST => state.users

//* memoized old result of selector, read docs reselect
export const getUsersStateSuper = createSelector(getUsersState, (usersState: UsersST) =>
  usersState.list.filter((el) => true),
)
