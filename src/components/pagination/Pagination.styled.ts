import styled from 'styled-components'
import { C } from '../../app/styles/Common.styled'

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
    background-color: ${props => {
      const { name, colors } = props.theme
      return name === 'light' ? colors.primaryFont : colors.secondaryFont
    }};
  }
`

const SelectedButton = styled(Button)`
  background-color: ${props => {
    const { name, colors } = props.theme
    return name === 'light' ? colors.primaryFont : colors.secondaryFont
  }};
`

export const S = {
  Pagination,
  Button,
  SelectedButton,
}
