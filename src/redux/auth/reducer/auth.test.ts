import { setCaptcha, setError, setUserData } from '../actions'
import { authReducer } from './index'

const startState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: '',
  error: '',
}

describe('authReducer', () => {
  it('user data has been set', () => {
    const action = setUserData(1, 'login', 'login@mail.ru', true)

    const endState = authReducer(startState, action)

    expect(endState.id).toBe(1)
    expect(endState.login).toBe('login')
    expect(endState.email).toBe('login@mail.ru')
    expect(endState.isAuth).toBeTruthy()
  })
  it('captcha has been set', () => {
    const action = setCaptcha('fakecaptcha.url.com')

    const endState = authReducer(startState, action)

    expect(endState.captcha).toBe('fakecaptcha.url.com')
    expect(endState.isAuth).toBeFalsy()
  })
  it('error message has been set', () => {
    const action = setError('Some error message')

    const endState = authReducer(startState, action)

    expect(endState.error).toBe('Some error message')
    expect(endState.isAuth).toBeFalsy()
  })
})
