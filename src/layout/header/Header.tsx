import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { useTheme } from 'styled-components'

import { S } from './Header.styled'

import { C } from '../../app/styles/Common.styled'
import { ButtonB, Icon } from '../../components'

interface HeaderPT {
  isAuth: boolean
  login: string | null
  toggleTheme: () => void
  logout: () => void
}

export const Header: FC<HeaderPT> = ({ isAuth, login, toggleTheme, logout }) => {
  const theme = useTheme()
  return (
    <C.Container>
      <C.FlexWrapper as={S.Header} $justify={'space-between'} $align={'center'} $shadow>
        <C.FlexWrapper $align={'center'} $gap={'20px'}>
          <ButtonB
            title={
              theme.name === 'dark' ? (
                <FontAwesomeIcon icon={faMoon} style={{ width: '15px', height: '15xp' }} />
              ) : (
                <FontAwesomeIcon icon={faSun} style={{ width: '15px', height: '15xp' }} />
              )
            }
            callback={toggleTheme}
          />
          <S.Logo>
            <Icon iconId={'logo'} width={'40px'} height={'40px'} />
          </S.Logo>
        </C.FlexWrapper>
        <C.FlexWrapper $gap={'20px'} $align={'center'}>
          <S.MenuLink to={'/users'}>
            <Icon iconId={'search'} width={'20px'} height={'20px'} />
          </S.MenuLink>
          <S.MenuLink to={'/users'}>
            <Icon iconId={'gear'} width={'20px'} height={'20px'} />
          </S.MenuLink>
          {isAuth ? (
            <>
              <S.MenuLink to={'/profile'}>
                <S.Login>{login}</S.Login>
              </S.MenuLink>
              <S.Logout onClick={logout}>
                <Icon iconId={'logout'} width={'20px'} height={'20px'} viewBox='0 0 32 32' />
              </S.Logout>
            </>
          ) : (
            <S.MenuLink to={'/login'}>
              <S.Login>Login</S.Login>
            </S.MenuLink>
          )}
        </C.FlexWrapper>
      </C.FlexWrapper>
    </C.Container>
  )
}
