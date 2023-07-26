import React from "react";
import styled from "styled-components";
import { DialogsListItem } from "./DialogsListItem";
import { Scroll } from "../../../components/Scroll";

type DialogsListPT = {};

export function DialogsList(props: DialogsListPT) {
  return (
    <StyledDialogsList>
      <List>
        <DialogsListItem id={1} />
        <DialogsListItem id={2} />
        <DialogsListItem id={3} />
        <DialogsListItem id={4} />
        <DialogsListItem id={5} />
        <DialogsListItem id={6} />
        <DialogsListItem id={7} />
        <DialogsListItem id={8} />
        <DialogsListItem id={9} />
        <DialogsListItem id={10} />
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
