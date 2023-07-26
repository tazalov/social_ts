import React from "react";
import styled from "styled-components";
import { DialogsListItem } from "./DialogsListItem";
import { Scroll } from "../../../components/Scroll";

type DialogsListPT = {};

export function DialogsList(props: DialogsListPT) {
  return (
    <StyledDialogsList>
      <List>
        <DialogsListItem id={1} name={"Iliya"} />
        <DialogsListItem id={2} name={"Dmitry"} />
        <DialogsListItem id={3} name={"Victor"} />
        <DialogsListItem id={4} name={"Dariya"} />
        <DialogsListItem id={5} name={"Alena"} />
        <DialogsListItem id={6} name={"Vladimir"} />
        <DialogsListItem id={7} name={"Tazazal"} />
        <DialogsListItem id={8} name={"Iron Man"} />
        <DialogsListItem id={9} name={"Blablabla"} />
        <DialogsListItem id={10} name={"Zxcxzczxc"} />
      </List>
    </StyledDialogsList>
  );
}

const StyledDialogsList = styled.div`
  padding: 5px 0;
`;

const List = styled.ul`
  height: 100%;
  overflow-y: hidden;
  ${Scroll}
  &:hover,
  &:focus {
    overflow-y: auto;
  }
`;
