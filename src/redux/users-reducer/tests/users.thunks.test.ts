import { AnyAction } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ResultCodeE, usersAPI } from '../../../api'
import {
  follow,
  setLoadingPage,
  setUsers,
  toggleProgressFollow,
  unfollow,
} from '../model/actions/users.actions'
import { getUsers, setFollow, setUnfollow } from '../model/thunks/users.thunks'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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

describe('users thunks tests', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('correct action creators should be dispatched (getUsers thunk)', async () => {
    const responseData = {
      items: users,
      totalCount: 10,
      error: '',
    }

    usersAPI.getUsers = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getUsers(1, 10) as unknown as AnyAction)

    const expectedActions = [
      setLoadingPage(true),
      setUsers(responseData.items, responseData.totalCount),
      setLoadingPage(false),
    ]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (getUsers thunk), response - error', async () => {
    const responseData = { error: 'asd' }

    usersAPI.getUsers = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getUsers(1, 10) as unknown as AnyAction)

    const expectedActions = [setLoadingPage(true)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (setFollow thunk)', async () => {
    const responseData = { resultCode: ResultCodeE.Success }

    usersAPI.followU = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(setFollow(1) as unknown as AnyAction)

    const expectedActions = [
      toggleProgressFollow(true, 1),
      toggleProgressFollow(false, 1),
      follow(1),
    ]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (setFollow thunk), response - error', async () => {
    const responseData = { resultCode: ResultCodeE.Error }

    usersAPI.followU = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(setFollow(1) as unknown as AnyAction)

    const expectedActions = [toggleProgressFollow(true, 1)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (setUnfollow thunk)', async () => {
    const responseData = { resultCode: ResultCodeE.Success }

    usersAPI.unfollowU = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(setUnfollow(1) as unknown as AnyAction)

    const expectedActions = [
      toggleProgressFollow(true, 1),
      toggleProgressFollow(false, 1),
      unfollow(1),
    ]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (setUnfollow thunk), response - error', async () => {
    const responseData = { resultCode: ResultCodeE.Error }

    usersAPI.unfollowU = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(setUnfollow(1) as unknown as AnyAction)

    const expectedActions = [toggleProgressFollow(true, 1)]

    expect(store.getActions()).toEqual(expectedActions)
  })
})
