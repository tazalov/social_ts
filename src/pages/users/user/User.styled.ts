import styled from 'styled-components'
import { C } from '../../../app/styles/Common.styled'
import { F } from '../../../app/styles/Fragments.styled'

const User = styled(C.FlexWrapper)`
  padding: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.colors.thirdBg};
  }
`

const Name = styled.div`
  ${F.Subtitle};
  font-size: 22px;
`

const Status = styled.div`
  color: ${props => {
    const { name, colors } = props.theme
    return name === 'light' ? colors.primaryFont : colors.secondaryFont
  }};
  font-size: 14px;
`

export const S = {
  User,
  Name,
  Status,
}
