import React from "react";
import { DialogsMessage } from "./DialogsMessage";
import styled from "styled-components";
import { TextForm } from "../../../components/textForm/textForm";
import { ScrollStyled } from "../../../components/Scroll.styled";
import { ShadowContainerStyled } from "../../../components/ShadowContainer.styled";
import { FlexWrapperStyled } from "../../../components/FlexWrapper.styled";
import {
  addMessageAC,
  DialogsAT,
  DialogsMessageT,
} from "../../../redux/dialogs.reducer";

type DialogsMessagesPT = {
  messages: DialogsMessageT[];
  dispatch: (value: DialogsAT) => void;
};

export function DialogsMessages({ messages, dispatch }: DialogsMessagesPT) {
  const addMessage = (message: string) => {
    dispatch(addMessageAC(message));
  };
  return (
    <StyledDialogsMessages direction={"column"} gap={"20px"}>
      <MessagesList>
        {messages.map((el) => (
          <DialogsMessage key={el.id} id={el.id} message={el.message} />
        ))}
      </MessagesList>
      <FormWrapper>
        <TextForm place={"Enter your message..."} callback={addMessage} />
      </FormWrapper>
    </StyledDialogsMessages>
  );
}

const StyledDialogsMessages = styled(FlexWrapperStyled)`
  height: 100%;
`;

const MessagesList = styled(ShadowContainerStyled)`
  padding: 0 10px;
  overflow-y: hidden;
  height: 100%;

  ${ScrollStyled}
  &:hover,
  &:focus {
    overflow-y: auto;
  }
`;

const FormWrapper = styled(ShadowContainerStyled)`
  padding: 10px;
`;
