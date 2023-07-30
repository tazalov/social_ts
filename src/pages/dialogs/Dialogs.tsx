import React from "react";
import { DialogsList } from "./dialogsList/DialogsList";
import { DialogsMessages } from "./dialogsMessages/DialogsMessages";
import styled from "styled-components";
import { DialogsListItemT, DialogsMessageT } from "../../redux/dialogs.reducer";

type DialogsPT = {
  list: DialogsListItemT[];
  messages: DialogsMessageT[];
  addMessage: (message: string) => void;
};

export function Dialogs({ list, messages, addMessage }: DialogsPT) {
  return (
    <StyledDialogs>
      <DialogsList list={list} />
      <DialogsMessages messages={messages} addMessage={addMessage} />
    </StyledDialogs>
  );
}

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: 200px 4fr;
  grid-template-rows: 60vh;
  gap: 20px;
`;
