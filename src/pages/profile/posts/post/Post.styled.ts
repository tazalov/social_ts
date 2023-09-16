import styled from 'styled-components'
import { C } from '../../../../app/styles/Common.styled'
import { F } from '../../../../app/styles/Fragments.styled'

const Post = styled.div`
  padding: 10px;
  word-break: break-all;
`

const UserInfo = styled(C.FlexWrapper)`
  width: 100%;
  margin-left: 10px;
  span {
    ${F.Subtitle};
  }
  i {
    color: ${props => props.theme.colors.secondaryFont};
    font-size: 10px;
  }
`

const PostText = styled.div`
  margin: 10px 0;
  padding: 20px 10px;
  background-color: ${props => props.theme.colors.thirdBg};
`

const PostButtons = styled(C.FlexWrapper)`
  button {
    padding: 5px;
    color: ${props => props.theme.colors.error};
    font-size: 14px;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
    span {
      margin-left: 5px;
    }
  }
`

export const S = {
  Post,
  UserInfo,
  PostText,
  PostButtons,
}
