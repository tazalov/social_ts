import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { F } from '../../../app/styles/Fragments.styled'
import { C } from '../../../app/styles/Common.styled'

const DialogsList = styled(C.ShadowContainer)`
  height: 100%;
`

const List = styled.ul`
  ${F.Scroll};
  height: 100%;
  overflow-y: hidden;
  transition: all 0.3s ease;
  &:hover {
    overflow-y: auto;
  }
`

const ItemLink = styled(NavLink)`
  padding: 10px;
  cursor: pointer;
  display: block;
  transition: all 0.3s ease;
  &.active,
  &:hover {
    background-color: ${props => props.theme.colors.thirdBg};
  }
`

const ItemText = styled.div`
  ${F.Subtitle}
`

export const S = {
  DialogsList,
  List,
  ItemLink,
  ItemText,
}
