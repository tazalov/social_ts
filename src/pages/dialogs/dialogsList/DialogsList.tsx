import React from "react";
import styled from "styled-components";
import { DialogsListItem } from "./DialogsListItem";

type DialogsListPT = {};

export function DialogsList(props: DialogsListPT) {
  return (
    <StyledDialogsList>
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
      <DialogsListItem />
    </StyledDialogsList>
  );
}

const StyledDialogsList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
`;
