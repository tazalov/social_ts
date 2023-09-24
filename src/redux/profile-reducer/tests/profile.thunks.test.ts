import { AnyAction } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { profileAPI, ResultCodeE } from '../../../api'
import { setFriendsProfile, setProfile, setProfileLoading, setStatus } from '../model/actions/profile.actions'
import {
  getFriendsProfile,
  getStatusProfile,
  getUserProfile,
  updateStatusProfile,
} from '../model/thunks/profile.thunks'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const friend = {
  name: 'FriendName',
  id: 123,
  uniqueUrlName: null,
  photos: {
    small: null,
    large: null,
  },
  status: 'My status',
  followed: false,
}

describe('profile thunks tests', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should dispatch setProfileLoading and setProfile', async () => {
    const responseData = {
      aboutMe: 'about',
      contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null,
      },
      lookingForAJob: true,
      lookingForAJobDescription: null,
      fullName: 'Fullname',
      userId: 123,
      photos: {
        small: null,
        large: null,
      },
    }

    profileAPI.getProfile = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getUserProfile('123') as unknown as AnyAction)

    const expectedActions = [setProfileLoading(true), setProfile(responseData), setProfileLoading(false)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch setFriendsProfile', async () => {
    const responseData = {
      items: [friend],
      totalCount: 10,
      error: '',
    }

    profileAPI.getProfileFriends = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getFriendsProfile() as unknown as AnyAction)

    const expectedActions = [setFriendsProfile(responseData.items, responseData.totalCount)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('dont should dispatch setFriendsProfile', async () => {
    const responseData = {
      items: [friend],
      totalCount: 10,
      error: 'some error',
    }

    profileAPI.getProfileFriends = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getFriendsProfile() as unknown as AnyAction)

    const expectedActions: any[] = []

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch setStatus', async () => {
    const responseData = 'some status'

    profileAPI.getStatus = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getStatusProfile('123') as unknown as AnyAction)

    const expectedActions = [setStatus(responseData)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch setStatus when will it be updated', async () => {
    const responseData = { resultCode: ResultCodeE.Success }

    profileAPI.updateStatus = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(updateStatusProfile('123') as unknown as AnyAction)

    const expectedActions: any[] = [setStatus('123')]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('dont should dispatch setStatus when will it be updated', async () => {
    const responseData = { resultCode: ResultCodeE.Error }

    profileAPI.updateStatus = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(updateStatusProfile('123') as unknown as AnyAction)

    const expectedActions: any[] = []

    expect(store.getActions()).toEqual(expectedActions)
  })
})
