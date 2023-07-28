import React from "react";
import { DialogsList } from "./dialogsList/DialogsList";
import { DialogsMessages } from "./dialogsMessages/DialogsMessages";
import styled from "styled-components";
import { DialogsT } from "../../redux/_store";

type DialogsPT = {
  dialogs: DialogsT;
};

export function Dialogs({ dialogs }: DialogsPT) {
  return (
    <StyledDialogs>
      <DialogsList list={dialogs.list} />
      <DialogsMessages messages={dialogs.messages} />
    </StyledDialogs>
  );
}

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: 170px 4fr;
  grid-template-rows: 60vh;
  gap: 10px;
`;
