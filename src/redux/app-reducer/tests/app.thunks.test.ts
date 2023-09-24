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
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('getUserData should dispatch setUserData with correct data when resultCode is ResultCodeE.Success', async () => {
    const responseData = {
      resultCode: ResultCodeE.Success,
      data: {
        id: 1,
        login: 'login',
        email: 'email',
      },
    }

    const expectedActions = [setUserData(1, 'login', 'email', true)]
    const store = mockStore({})

    authAPI.getUserData = jest.fn(() => Promise.resolve(responseData))
    await store.dispatch(getUserData() as unknown as AnyAction) //! КОСТЫЛЬ

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('getUserData should dispatch setUserData with null values when resultCode is not ResultCodeE.Success', async () => {
    const responseData = {
      resultCode: ResultCodeE.Error,
    }

    const expectedActions = [setUserData(null, null, null, false)]
    const store = mockStore({})

    authAPI.getUserData = jest.fn(() => Promise.resolve(responseData))
    await store.dispatch(getUserData() as unknown as AnyAction) //! КОСТЫЛЬ

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch getUserData when login is successful', async () => {
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

    const expectedActions = [setUserData(1, 'login', 'email', true)]

    expect(store.getActions()).toEqual(expectedActions)
    expect(authAPI.login).toHaveBeenCalledWith(email, pass, remember, captcha)
  })

  it('should dispatch setError when login is failed', async () => {
    const responseData = {
      messages: ['Some error'],
      resultCode: ResultCodeE.Error,
    }

    authAPI.login = jest.fn(() => Promise.resolve(responseData))

    const store = mockStore()
    await store.dispatch(loginUser(email, pass, remember, captcha) as unknown as AnyAction)

    const expectedActions = [setError('Some error')]

    expect(store.getActions()).toEqual(expectedActions)
    expect(authAPI.login).toHaveBeenCalledWith(email, pass, remember, captcha)
  })

  it('should dispatch setCaptcha when login is needed captcha', async () => {
    const responseData = {
      messages: ['Some error'],
      resultCode: ResultCodeE.Captcha,
    }
    const responseCaptchaData = {
      url: 'Some captcha url',
    }

    authAPI.login = jest.fn(() => Promise.resolve(responseData))
    authAPI.getCaptcha = jest.fn(() => Promise.resolve(responseCaptchaData))

    const store = mockStore()
    await store.dispatch(loginUser(email, pass, remember, captcha) as unknown as AnyAction)

    const expectedActions = [setError('Some error'), setCaptcha('Some captcha url')]

    expect(store.getActions()).toEqual(expectedActions)
    expect(authAPI.login).toHaveBeenCalledWith(email, pass, remember, captcha)
  })

  it('logoutUser should dispatch setUserData with null values', async () => {
    const responseData = {
      resultCode: ResultCodeE.Success,
    }

    const expectedActions = [setUserData(null, null, null, false)]
    const store = mockStore({})

    authAPI.logout = jest.fn(() => Promise.resolve(responseData))

    await store.dispatch(logoutUser() as unknown as AnyAction) //! КОСТЫЛЬ

    expect(store.getActions()).toEqual(expectedActions)
  })
})
