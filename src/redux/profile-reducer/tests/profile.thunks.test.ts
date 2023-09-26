import { notify, setUpNotifications } from 'reapop'
import { AnyAction } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { profileAPI, ResultCodeE } from '../../../api'
import {
  setErrorUpdate,
  setFriendsProfile,
  setPhotoProfile,
  setProfile,
  setProfileLoading,
  setStatus,
} from '../model/actions/profile.actions'
import {
  getFriendsProfile,
  getStatusProfile,
  getUserProfile,
  updatePhotoProfile,
  updateProfile,
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

const profile = {
  aboutMe: 'asd',
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
  lookingForAJobDescription: 'asd',
  fullName: 'asd',
  userId: 2,
  photos: {
    small: null,
    large: null,
  },
}

describe('profile thunks tests', () => {
  beforeEach(() => {
    setUpNotifications({
      generateId: () => 'mocked-id',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('correct action creators should be dispatched (getUserProfile thunk)', async () => {
    profileAPI.getProfile = jest.fn(() => Promise.resolve(profile))

    const store = mockStore()
    await store.dispatch(getUserProfile('123') as unknown as AnyAction)

    const expectedActions = [setProfileLoading(true), setProfile(profile), setProfileLoading(false)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (getFriendsProfile thunk)', async () => {
    const responseData = { items: [friend], totalCount: 10, error: '' }

    profileAPI.getProfileFriends = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getFriendsProfile() as unknown as AnyAction)

    const expectedActions = [setFriendsProfile(responseData.items, responseData.totalCount)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (getFriendsProfile thunk), response have error', async () => {
    const responseData = { items: [friend], totalCount: 10, error: 'some error' }

    profileAPI.getProfileFriends = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getFriendsProfile() as unknown as AnyAction)

    const expectedActions: any[] = [notify(responseData.error, 'error')]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (getStatusProfile thunk)', async () => {
    const responseData = 'some status'

    profileAPI.getStatus = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(getStatusProfile('123') as unknown as AnyAction)

    const expectedActions = [setStatus(responseData)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updateStatusProfile thunk)', async () => {
    const responseData = { resultCode: ResultCodeE.Success }

    profileAPI.updateStatus = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(updateStatusProfile('123') as unknown as AnyAction)

    const expectedActions: any[] = [setStatus('123')]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updateStatusProfile thunk), response have error', async () => {
    const responseData = { resultCode: ResultCodeE.Error, messages: ['Some error'] }

    profileAPI.updateStatus = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(updateStatusProfile('123') as unknown as AnyAction)

    const expectedActions: any[] = [notify(responseData.messages[0], 'error')]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updatePhotoProfile thunk)', async () => {
    const responseData = {
      resultCode: ResultCodeE.Success,
      data: {
        photos: {
          small: 'smallPhotoUrl',
          large: 'largePhotoUrl',
        },
      },
    }
    const photoFile = '' as unknown as File

    profileAPI.updatePhoto = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(updatePhotoProfile(photoFile) as unknown as AnyAction)

    const expectedActions: any[] = [setPhotoProfile(responseData.data.photos)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updatePhotoProfile thunk), response have error', async () => {
    const responseData = { resultCode: ResultCodeE.Error, messages: ['Some error'] }

    const photoFile = '' as unknown as File

    profileAPI.updatePhoto = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(updatePhotoProfile(photoFile) as unknown as AnyAction)

    const expectedActions: any[] = [notify(responseData.messages[0], 'error')]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updatePhotoProfile thunk), some error', async () => {
    const e = new Error('Error')
    const photoFile = '' as unknown as File

    profileAPI.updatePhoto = jest.fn(() => Promise.reject(e))

    const store = mockStore()
    await store.dispatch(updatePhotoProfile(photoFile) as unknown as AnyAction)

    const expectedActions: any[] = [notify(e.message, 'error')]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updateProfile thunk)', async () => {
    const responseData = { resultCode: ResultCodeE.Success }

    profileAPI.updateProfile = jest.fn(() => Promise.resolve(responseData))
    profileAPI.getProfile = jest.fn(() => Promise.resolve(profile))

    const store = mockStore({ app: { id: '2' } })
    await store.dispatch(updateProfile(profile) as unknown as AnyAction)

    const expectedActions: any[] = [setProfileLoading(true), setProfile(profile), setProfileLoading(false)]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updateProfile thunk), id into state is undefined', async () => {
    const responseData = { resultCode: ResultCodeE.Success }

    profileAPI.updateProfile = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore({ app: { id: null } })
    await store.dispatch(updateProfile(profile) as unknown as AnyAction)

    const expectedActions: any[] = [notify('id must be a number when sending the request', 'error')]

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (updateProfile thunk), response have error', async () => {
    const responseData = { resultCode: ResultCodeE.Error, messages: ['Some error'] }

    profileAPI.updateProfile = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore({ app: { id: '2' } })
    await store.dispatch(updateProfile(profile) as unknown as AnyAction)

    const expectedActions: any[] = [setErrorUpdate(responseData.messages[0]), notify(responseData.messages[0], 'error')]

    expect(store.getActions()).toEqual(expectedActions)
  })
})
