import React from "react";
import styled from "styled-components";
import { DialogsListItem } from "./DialogsListItem";
import { Scroll } from "../../../components/Scroll";
import { theme } from "../../../styles/Theme";

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
  ${Scroll}
`;
