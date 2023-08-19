import styled from 'styled-components'
import { C } from '../../../styles/Common.styled'
import { F } from '../../../styles/Fragments.styled'

const User = styled(C.FlexWrapper)`
  padding: 10px;
  &:hover {
    background-color: ${props => props.theme.colors.thirdBg};
  }
`

const Name = styled.div`
  ${F.Subtitle};
  font-size: 22px;
`

const Status = styled.div`
  color: ${props => props.theme.colors.secondaryFont};
  font-size: 14px;
`

export const S = {
  User,
  Name,
  Status,
}
