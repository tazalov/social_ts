import styled from 'styled-components'

import { C } from '../../../app/styles/Common.styled'
import { F } from '../../../app/styles/Fragments.styled'

//messages
const DialogsMessages = styled(C.FlexWrapper)`
  height: 100%;
`

const MessagesList = styled(C.ShadowContainer)`
  padding: 0 10px;
  overflow-y: hidden;
  height: 100%;
  transition: all 0.3s ease;
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
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 8px 8px 8px 0;
  max-width: 300px;
  position: relative;
  padding: 5px;
  user-select: none;
  word-break: break-all;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 0; /* Размер и форма уголка */
    border-color: transparent ${(props) => props.theme.colors.accent} transparent transparent; /* Цвет уголка и фона сообщения */
  }
`

const Text = styled.div`
  color: white;
  padding: 5px;
  font-size: 14px;
`

const Time = styled.div`
  text-align: right;
  font-size: 10px;
  color: white;
`

export const S = {
  DialogsMessages,
  MessagesList,
  FormWrapper,
  Message,
  Text,
  Time,
}
