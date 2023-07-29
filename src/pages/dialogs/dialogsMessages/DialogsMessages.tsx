import React from "react";
import { DialogsMessage } from "./DialogsMessage";
import styled from "styled-components";
import { TextForm } from "../../../components/textForm/textForm";
import { Scroll } from "../../../components/Scroll";
import { ShadowContainer } from "../../../components/ShadowContainer";
import { DialogsMessageT } from "../../../redux/_store";
import { FlexWrapper } from "../../../components/FlexWrapper";

type DialogsMessagesPT = {
  messages: DialogsMessageT[];
};

export function DialogsMessages({ messages }: DialogsMessagesPT) {
  return (
    <StyledDialogsMessages direction={"column"} gap={"20px"}>
      <MessagesList>
        {messages.map((el) => (
          <DialogsMessage key={el.id} id={el.id} message={el.message} />
        ))}
      </MessagesList>
      <FormWrapper>
        <TextForm place={"Enter your message..."} callback={() => {}} />
      </FormWrapper>
    </StyledDialogsMessages>
  );
}

const StyledDialogsMessages = styled(FlexWrapper)`
  height: 100%;
`;

const MessagesList = styled(ShadowContainer)`
  padding: 0 10px;
  overflow-y: hidden;
  height: 100%;
  ${Scroll}
  &:hover,
  &:focus {
    overflow-y: auto;
  }
`;

const FormWrapper = styled(ShadowContainer)`
  padding: 10px;
`;
