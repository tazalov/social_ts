import { DialogsList } from "./dialogsList/DialogsList";
import { DialogsMessages } from "./dialogsMessages/DialogsMessages";
import { DialogsListItemT, DialogsMessageT } from "../../redux/dialogs.reducer";
import { S } from "./Dialogs.styled";

type DialogsPT = {
  list: DialogsListItemT[];
  messages: DialogsMessageT[];
  addMessage: (message: string) => void;
};

export function Dialogs({ list, messages, addMessage }: DialogsPT) {
  return (
    <S.Dialogs>
      <DialogsList list={list} />
      <DialogsMessages messages={messages} addMessage={addMessage} />
    </S.Dialogs>
  );
}
