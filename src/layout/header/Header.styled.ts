import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { F } from '../../app/styles/Fragments.styled'

const Header = styled.header`
  margin: 20px 0;
  padding: 10px;
`

const Logo = styled.div`
  svg {
    fill: ${(props) => props.theme.colors.accent};
  }
`

const MenuLink = styled(NavLink)`
  svg {
    transition: all 0.3s linear;
    &:hover {
      fill: ${(props) => props.theme.colors.accent};
    }
  }
`

const Logout = styled.div`
  svg {
    transition: all 0.3s linear;
    &:hover {
      fill: ${(props) => props.theme.colors.accent};
    }
  }
`

const Login = styled.span`
  ${F.Subtitle};
  text-transform: uppercase;
  transition: all 0.3s linear;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`

export const S = {
  Header,
  Logo,
  MenuLink,
  Logout,
  Login,
}
