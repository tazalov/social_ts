import React from "react";
import { addMessageAC, DialogsAT, DialogsT } from "../../redux/dialogs.reducer";
import { Dialogs } from "./Dialogs";

type DialogsContainerPT = {
  dialogs: DialogsT;
  dispatch: (value: DialogsAT) => void;
};

export function DialogsContainer({ dialogs, dispatch }: DialogsContainerPT) {
  const addMessage = (message: string) => {
    dispatch(addMessageAC(message));
  };
  return <Dialogs dialogs={dialogs} addMessage={addMessage} />;
}
