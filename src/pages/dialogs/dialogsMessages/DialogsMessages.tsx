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
        <DialogsMessage id={1} message={"Lorem ipsum"} />
        <DialogsMessage
          id={2}
          message={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        />
        <DialogsMessage id={3} message={"A molestiae praesentium quod!"} />
        <DialogsMessage
          id={4}
          message={
            "A molestiae praesentium quod! Earum hic necessitatibus temporibus! Architecto cum nesciunt quis."
          }
        />
        <DialogsMessage
          id={5}
          message={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestiae praesentium quod! Earum hic necessitatibus temporibus! Architecto cum nesciunt quis."
          }
        />
        <DialogsMessage
          id={6}
          message={"Earum hic necessitatibus temporibus!"}
        />
        <DialogsMessage
          id={7}
          message={
            "A molestiae praesentium quod! Earum hic necessitatibus temporibus!"
          }
        />
        <DialogsMessage id={8} message={"Lorem ipsum"} />
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
