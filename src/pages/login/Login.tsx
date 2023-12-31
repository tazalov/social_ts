import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginForm } from './LoginForm'

import { C } from '../../app/styles/Common.styled'
import { TitleBlock } from '../../components'
import { loginUser } from '../../redux/app-reducer'
import { RootStateT } from '../../redux/store'

export const Login: FC<MapStatePT & MapDispatchPT> = ({ isAuth, captcha, error, loginUser }) => {
  useEffect(() => {
    document.title = 'Login'
  }, [])
  return isAuth ? (
    <Redirect to={'/profile'} />
  ) : (
    <C.FlexWrapper $gap={'10px'} $direction={'column'} $justify={'center'} $shadow>
      <TitleBlock title={'LOGIN'} />
      <LoginForm error={error} captcha={captcha} loginUser={loginUser} />
    </C.FlexWrapper>
  )
}

interface MapStatePT {
  isAuth: boolean
  captcha: string
  error: string
}

const mapStateToProps = (state: RootStateT): MapStatePT => ({
  isAuth: state.app.isAuth,
  captcha: state.app.captcha,
  error: state.app.error,
})

interface MapDispatchPT {
  loginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => any
}

export default connect<MapStatePT, MapDispatchPT, unknown, RootStateT>(mapStateToProps, {
  loginUser,
})(Login)
