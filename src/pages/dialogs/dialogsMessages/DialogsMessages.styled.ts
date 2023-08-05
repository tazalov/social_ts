import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { C } from "../../../components/Common.styled";
import { F } from "../../../components/Fragments.styled";

//messages
const DialogsMessages = styled(C.FlexWrapper)`
  height: 100%;
`;

const MessagesList = styled(C.ShadowContainer)`
  padding: 0 10px;
  overflow-y: hidden;
  height: 100%;
  ${F.Scroll}
  &:hover,
  &:focus {
    overflow-y: auto;
  }
`;

const FormWrapper = styled(C.ShadowContainer)`
  padding: 10px;
`;

//message
const Message = styled.div`
  margin: 10px;
  background-color: ${theme.colors.primaryBg};
  border-radius: 8px 8px 8px 0;
  max-width: 300px;
  position: relative;
  padding: 5px;
  user-select: none;
  &:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: -10px;
    width: 16px;
    height: 10px;
    clip-path: path("M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z");
    background-color: ${theme.colors.primaryBg};
  }
`;

const Text = styled.div`
  color: ${theme.colors.primaryFont};
  padding: 5px;
  font-size: 14px;
`;

const Time = styled.div`
  text-align: right;
  font-size: 10px;
  color: ${theme.colors.secondaryFont};
`;

export const S = {
  DialogsMessages,
  MessagesList,
  FormWrapper,
  Message,
  Text,
  Time,
};
