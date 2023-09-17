import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { F } from '../../app/styles/Fragments.styled'

const Sidebar = styled.nav``

const SidebarItem = styled.li``

const SidebarLink = styled(NavLink)`
  ${F.Subtitle};
  padding: 15px 150px 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  &.active,
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => {
      const { name, colors } = props.theme
      return name === 'light' ? colors.secondaryFont : colors.primaryFont
    }};
  }
`

export const S = {
  Sidebar,
  SidebarItem,
  SidebarLink,
}
