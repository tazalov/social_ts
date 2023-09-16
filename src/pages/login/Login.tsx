import { FC } from 'react'
import styled from 'styled-components'
import { C } from '../../styles/Common.styled'
import { F } from '../../styles/Fragments.styled'
import { LoginForm } from './LoginForm'

export const Login: FC = () => {
  return (
    <C.ShadowContainer>
      <C.FlexWrapper $gap={'10px'} $direction={'column'} $justify={'center'}>
        <Title>LOGIN</Title>
        <LoginForm />
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
