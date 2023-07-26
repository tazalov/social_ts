import React from "react";
import { DialogsMessage } from "./DialogsMessage";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TextForm } from "../../../components/textForm/textForm";

type DialogsMessagesPT = {};

export function DialogsMessages(props: DialogsMessagesPT) {
  return (
    <StyledDialogsMessages direction={"column"}>
      <MessagesList>
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
        <DialogsMessage />
      </MessagesList>
      <TextForm />
    </StyledDialogsMessages>
  );
}

const StyledDialogsMessages = styled(FlexWrapper)``;

const MessagesList = styled.ul`
  height: 100%;
  padding: 10px;
  overflow: auto;
`;
