import { notify, setUpNotifications } from 'reapop'
import { AnyAction } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { authAPI, ResultCodeE } from '../../../api'
import { setCaptcha, setError, setUserData } from '../model/actions/app.actions'
import { getUserData, loginUser, logoutUser } from '../model/thunks/app.thunks'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

//Data for login
const email = 'test@email.com'
const pass = 'password'
const remember = false
const captcha = 'testCaptcha'

describe('app thunks tests', () => {
  beforeEach(() => {
    setUpNotifications({
      generateId: () => 'mocked-id',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('correct action creators should be dispatched (getUserData thunk)', async () => {
    const responseData = {
      resultCode: ResultCodeE.Success,
      data: {
        id: 1,
        login: 'login',
        email: 'email',
      },
    }

    const expectedActions = [setUserData(1, 'login', 'email', true)]
    const store = mockStore()

    authAPI.getUserData = jest.fn(() => Promise.resolve(responseData))
    await store.dispatch(getUserData() as unknown as AnyAction) //! КОСТЫЛЬ

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (getUserData thunk), response have error', async () => {
    const responseData = { resultCode: ResultCodeE.Error }

    const expectedActions = [setUserData(null, null, null, false)]
    const store = mockStore({})

    authAPI.getUserData = jest.fn(() => Promise.resolve(responseData))
    await store.dispatch(getUserData() as unknown as AnyAction) //! КОСТЫЛЬ

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('correct action creators should be dispatched (loginUser thunk)', async () => {
    const responseData = { resultCode: ResultCodeE.Success }
    const responseGetUserData = {
      resultCode: ResultCodeE.Success,
      data: {
        id: 1,
        login: 'login',
        email: 'email',
      },
    }

    authAPI.login = jest.fn(() => Promise.resolve(responseData))
    authAPI.getUserData = jest.fn(() => Promise.resolve(responseGetUserData))

    const store = mockStore()
    await store.dispatch(loginUser(email, pass, remember, captcha) as unknown as AnyAction)

    const expectedActions = [setUserData(1, 'login', 'email', true), notify('Success authorize', 'success')]

    expect(store.getActions()).toEqual(expectedActions)
    expect(authAPI.login).toHaveBeenCalledWith(email, pass, remember, captcha)
  })

  it('correct action creators should be dispatched (loginUser thunk), response have error', async () => {
    const responseData = { messages: ['Some error'], resultCode: ResultCodeE.Error }

    authAPI.login = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(loginUser(email, pass, remember, captcha) as unknown as AnyAction)

    const expectedActions = [setError(responseData.messages[0]), notify(responseData.messages[0], 'error')]

    expect(store.getActions()).toEqual(expectedActions)
    expect(authAPI.login).toHaveBeenCalledWith(email, pass, remember, captcha)
  })

  it('correct action creators should be dispatched (loginUser thunk), response have captcha error', async () => {
    const responseData = { messages: ['Some error'], resultCode: ResultCodeE.Captcha }
    const responseCaptchaData = { url: 'Some captcha url' }

    authAPI.login = jest.fn(() => Promise.resolve(responseData))
    authAPI.getCaptcha = jest.fn(() => Promise.resolve(responseCaptchaData))

    const store = mockStore()
    await store.dispatch(loginUser(email, pass, remember, captcha) as unknown as AnyAction)

    const expectedActions = [
      setError(responseData.messages[0]),
      setCaptcha('Some captcha url'),
      notify(responseData.messages[0], 'warning'),
    ]

    expect(store.getActions()).toEqual(expectedActions)
    expect(authAPI.login).toHaveBeenCalledWith(email, pass, remember, captcha)
  })

  it('correct action creators should be dispatched (logoutUser thunk)', async () => {
    const responseData = { resultCode: ResultCodeE.Success }

    const expectedActions = [setUserData(null, null, null, false)]
    const store = mockStore({})

    authAPI.logout = jest.fn(() => Promise.resolve(responseData))

    await store.dispatch(logoutUser() as unknown as AnyAction) //! КОСТЫЛЬ

    expect(store.getActions()).toEqual(expectedActions)
  })
})
