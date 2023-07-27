import React from "react";
import { DialogsList } from "./dialogsList/DialogsList";
import { DialogsMessages } from "./dialogsMessages/DialogsMessages";
import styled from "styled-components";

type DialogsPT = {};

export function Dialogs(props: DialogsPT) {
  return (
    <StyledDialogs>
      <DialogsList />
      <DialogsMessages />
    </StyledDialogs>
  );
}

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: 170px 4fr;
  grid-template-rows: 60vh;
  gap: 10px;
`;
