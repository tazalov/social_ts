import styled from 'styled-components'
import { C } from '../../../styles/Common.styled'
import { F } from '../../../styles/Fragments.styled'

//messages
const DialogsMessages = styled(C.FlexWrapper)`
  height: 100%;
`

const MessagesList = styled(C.ShadowContainer)`
  padding: 0 10px;
  overflow-y: hidden;
  height: 100%;
  ${F.Scroll}
  &:hover,
  &:focus {
    overflow-y: auto;
  }
`

const FormWrapper = styled(C.ShadowContainer)`
  padding: 10px;
`

//message
const Message = styled.div`
  margin: 10px;
  background-color: ${props => props.theme.colors.primaryBg};
  border-radius: 8px 8px 8px 0;
  max-width: 300px;
  position: relative;
  padding: 5px;
  user-select: none;
  word-break: break-all;
  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    left: -10px;
    width: 16px;
    height: 10px;
    clip-path: path('M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z');
    background-color: ${props => props.theme.colors.primaryBg};
  }
`

const Text = styled.div`
  color: ${props => props.theme.colors.primaryFont};
  padding: 5px;
  font-size: 14px;
`

const Time = styled.div`
  text-align: right;
  font-size: 10px;
  color: ${props => props.theme.colors.secondaryFont};
`

export const S = {
  DialogsMessages,
  MessagesList,
  FormWrapper,
  Message,
  Text,
  Time,
}
