import styled from 'styled-components'
import { C } from '../../styles/Common.styled'

const UserList = styled.ul``

const User = styled(C.FlexWrapper)`
  padding: 10px;
  &:hover {
    background-color: ${props => props.theme.colors.thirdBg};
  }
`

const Info = styled(C.FlexWrapper)`
  user-select: none;
`

export const S = {
  UserList,
  User,
  Info,
}
