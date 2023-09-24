import {
  follow,
  setCurrentPage,
  setLoadingPage,
  setUsers,
  toggleProgressFollow,
  unfollow,
} from '../model/actions/users.actions'
import { usersReducer } from '../model/users.reducer'
import { UsersST } from '../types/users.reducer'

const startState: UsersST = {
  list: [
    {
      name: 'FriendName',
      id: 123,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: 'My status',
      followed: false,
    },
    {
      name: 'FriendName2',
      id: 124,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: 'My status',
      followed: true,
    },
  ],
  totalCount: 0,
  pageSize: 15,
  currentPage: 1,
  isPageLoading: true,
  progressFollow: {
    isFetch: false,
    userId: [1, 2, 3],
  },
}

describe('usersReducer', () => {
  it('the correct user changes the following property', () => {
    const action = follow(123)

    const endState = usersReducer(startState, action)

    expect(endState.list[0].id).toBe(123)
    expect(endState.list[0].followed).toBeTruthy()
  })

  it('the correct user changes the unfollowing property', () => {
    const action = unfollow(124)

    const endState = usersReducer(startState, action)

    expect(endState.list[1].id).toBe(124)
    expect(endState.list[1].followed).toBeFalsy()
  })

  it('users has been added', () => {
    const user1 = {
      name: 'User1',
      id: 1,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: 'My status',
      followed: false,
    }
    const user2 = {
      name: 'User2',
      id: 2,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: 'status',
      followed: true,
    }
    const users = [user1, user2]
    const action = setUsers(users, 10)

    const endState = usersReducer(startState, action)

    expect(endState.list?.length).toBe(2)
    expect(endState.list[0]).toEqual(user1)
    expect(endState.list[1]).toEqual(user2)
    expect(endState.totalCount).toBe(10)
  })

  it('the current page changes correctly', () => {
    const action = setCurrentPage(10)

    const endState = usersReducer(startState, action)

    expect(endState.currentPage).toBe(10)
  })

  it('state for isPageLoading is set correctly', () => {
    const action = setLoadingPage(true)

    const endState = usersReducer(startState, action)

    expect(endState.isPageLoading).toBeTruthy()

    const action2 = setLoadingPage(false)

    const endState2 = usersReducer(endState, action2)

    expect(endState2.isPageLoading).toBeFalsy()
  })

  it('user id is correctly added and removed from progressFollow', () => {
    const action = toggleProgressFollow(false, 1)

    const endState = usersReducer(startState, action)

    expect(endState.progressFollow.isFetch).toBeFalsy()
    expect(endState.progressFollow.userId.includes(1)).toBeFalsy()

    const action2 = toggleProgressFollow(true, 1)

    const endState2 = usersReducer(endState, action2)

    expect(endState2.progressFollow.isFetch).toBeTruthy()
    expect(endState2.progressFollow.userId.includes(1)).toBeTruthy()
  })
})
