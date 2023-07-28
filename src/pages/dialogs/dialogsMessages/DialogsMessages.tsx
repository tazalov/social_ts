import React from "react";
import { DialogsMessage } from "./DialogsMessage";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TextForm } from "../../../components/textForm/textForm";
import { Scroll } from "../../../components/Scroll";
import { ShadowContainer } from "../../../components/ShadowContainer";
import { DialogsMessageT } from "../../../redux/_store";

type DialogsMessagesPT = {
  messages: DialogsMessageT[];
};

export function DialogsMessages({ messages }: DialogsMessagesPT) {
  return (
    <StyledDialogsMessages direction={"column"}>
      <ListWrapper>
        <MessagesList>
          {messages.map((el) => (
            <DialogsMessage key={el.id} id={el.id} message={el.message} />
          ))}
        </MessagesList>
      </ListWrapper>
      <FormWrapper>
        <TextForm place={"Enter your message..."} />
      </FormWrapper>
    </StyledDialogsMessages>
  );
}

const StyledDialogsMessages = styled(FlexWrapper)`
  height: 100%;
`;

const ListWrapper = styled(ShadowContainer)`
  min-height: 100%;
  margin-bottom: 10px;
`;

const MessagesList = styled.ul`
  height: 100%;
  padding: 0 10px;
  overflow-y: hidden;
  ${Scroll}
  &:hover,
  &:focus {
    overflow-y: auto;
  }
`;

const FormWrapper = styled(ShadowContainer)`
  padding: 10px;
`;
