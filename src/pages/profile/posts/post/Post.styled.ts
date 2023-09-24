import styled from 'styled-components'
import { C } from '../../../../app/styles/Common.styled'
import { F } from '../../../../app/styles/Fragments.styled'

const Post = styled(C.ShadowContainer)`
  word-break: break-all;
`

const PostHeader = styled(C.FlexWrapper)`
  background-color: ${props => props.theme.colors.accent};
  color: ${props => {
    const { name, colors } = props.theme
    return name === 'light' ? colors.secondaryFont : colors.primaryFont
  }};
  padding: 10px;
`

const UserInfo = styled(C.FlexWrapper)`
  width: 100%;
  margin-left: 10px;
  span {
    ${F.Subtitle};
  }
  i {
    color: ${props => {
      const { name, colors } = props.theme
      return name === 'light' ? colors.secondaryFont : colors.primaryFont
    }};
    font-size: 10px;
  }
`

const PostText = styled.div`
  padding: 20px 10px;
`

const PostButtons = styled(C.FlexWrapper)`
  padding: 10px;
  button {
    padding: 5px;
    color: ${props => props.theme.colors.error};
    font-size: 14px;
    transition: all 0.3s ease;
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
  PostHeader,
  UserInfo,
  PostText,
  PostButtons,
}
