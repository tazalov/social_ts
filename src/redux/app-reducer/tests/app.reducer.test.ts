import { setCaptcha, setError, setUserData } from '../model/actions/app.actions'
import { appReducer } from '../model/app.reducer'
import { AppST } from '../types/app.reducer'

const startState: AppST = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: '',
  error: '',
  isInitialized: true,
}

describe('appReducer', () => {
  it('user data has been set', () => {
    const action = setUserData(1, 'login', 'login@mail.ru', true)

    const endState = appReducer(startState, action)

    expect(endState.id).toBe(1)
    expect(endState.login).toBe('login')
    expect(endState.email).toBe('login@mail.ru')
    expect(endState.isAuth).toBeTruthy()
  })
  it('captcha has been set', () => {
    const action = setCaptcha('fakecaptcha.url.com')

    const endState = appReducer(startState, action)

    expect(endState.captcha).toBe('fakecaptcha.url.com')
    expect(endState.isAuth).toBeFalsy()
  })
  it('error message has been set', () => {
    const action = setError('Some error message')

    const endState = appReducer(startState, action)

    expect(endState.error).toBe('Some error message')
    expect(endState.isAuth).toBeFalsy()
  })
})
