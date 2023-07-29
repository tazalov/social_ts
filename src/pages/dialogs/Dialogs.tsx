import React from "react";
import { DialogsList } from "./dialogsList/DialogsList";
import { DialogsMessages } from "./dialogsMessages/DialogsMessages";
import styled from "styled-components";
import { ActionsT, DialogsT } from "../../redux/_store";

type DialogsPT = {
  dialogs: DialogsT;
  dispatch: (value: ActionsT) => void;
};

export function Dialogs({ dialogs, dispatch }: DialogsPT) {
  return (
    <StyledDialogs>
      <DialogsList list={dialogs.list} />
      <DialogsMessages messages={dialogs.messages} dispatch={dispatch} />
    </StyledDialogs>
  );
}

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: 200px 4fr;
  grid-template-rows: 60vh;
  gap: 20px;
`;
