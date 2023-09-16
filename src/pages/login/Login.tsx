import { FC } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { C } from '../../app/styles/Common.styled'
import { F } from '../../app/styles/Fragments.styled'
import { loginUser } from '../../redux/auth/thunks'
import { AppStateT } from '../../redux/store'
import { LoginForm } from './LoginForm'

export const Login: FC<MapStatePT & MapDispatchPT> = ({ isAuth, loginUser }) => {
  return isAuth ? (
    <Redirect to={'/profile'} />
  ) : (
    <C.ShadowContainer>
      <C.FlexWrapper $gap={'10px'} $direction={'column'} $justify={'center'}>
        <Title>LOGIN</Title>
        <LoginForm loginUser={loginUser} />
      </C.FlexWrapper>
    </C.ShadowContainer>
  )
}

const Title = styled.h2`
  ${F.Title};
  text-align: center;
  background-color: ${props => props.theme.colors.thirdBg};
  padding: 10px;
`

interface MapStatePT {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateT) => ({
  isAuth: state.auth.isAuth,
})

interface MapDispatchPT {
  loginUser: (email: string, password: string, rememberMe: boolean) => void
}

export default connect<MapStatePT, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  loginUser,
})(Login)
