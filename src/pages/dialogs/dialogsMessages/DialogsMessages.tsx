import React from "react";
import { DialogsMessage } from "./DialogsMessage";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TextForm } from "../../../components/textForm/textForm";
import { Scroll } from "../../../components/Scroll";
import { ShadowContainer } from "../../../components/ShadowContainer";

type DialogsMessagesPT = {};

export function DialogsMessages(props: DialogsMessagesPT) {
  const data = [
    { id: 1, message: "Lorem ipsum" },
    {
      id: 2,
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      message:
        "A molestiae praesentium quod! Earum hic necessitatibus temporibus! Architecto cum nesciunt quis.",
    },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestiae praesentium quod! Earum hic necessitatibus temporibus! Architecto cum nesciunt quis.",
    },
    { id: 5, message: "Lorem ipsum" },
    {
      id: 6,
      message:
        "A molestiae praesentium quod! Earum hic necessitatibus temporibus!",
    },
    { id: 7, message: "Lorem ipsum" },
    { id: 8, message: "A molestiae praesentium quod!" },
  ];
  return (
    <StyledDialogsMessages direction={"column"}>
      <ListWrapper>
        <MessagesList>
          {data.map((el) => (
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
  padding: 5px;
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
