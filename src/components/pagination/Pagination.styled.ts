import styled from 'styled-components'
import { C } from '../../styles/Common.styled'

const Pagination = styled(C.ShadowContainer)`
  padding: 10px;
  color: white;
`

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.accent};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryFont};
  }
`

const SelectedButton = styled(Button)`
  background-color: ${props => props.theme.colors.secondaryFont};
`

export const S = {
  Pagination,
  Button,
  SelectedButton,
}
