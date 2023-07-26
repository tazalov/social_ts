import React from "react";
import { DialogsMessage } from "./DialogsMessage";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TextForm } from "../../../components/textForm/textForm";
import { Scroll } from "../../../components/Scroll";
import { theme } from "../../../styles/Theme";

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
      <FormWrapper>
        <TextForm />
      </FormWrapper>
    </StyledDialogsMessages>
  );
}

const StyledDialogsMessages = styled(FlexWrapper)`
  padding: 5px;
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

const FormWrapper = styled.div`
  padding: 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background-color: ${theme.colors.thirdBg};
  }
`;
