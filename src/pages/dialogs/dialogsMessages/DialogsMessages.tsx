import { DialogsMessage } from "./DialogsMessage";
import { TextForm } from "../../../components/textForm/textForm";
import { DialogsMessageT } from "../../../redux/dialogs.reducer";
import { S } from "./DialogsMessages.styled";

type DialogsMessagesPT = {
  messages: DialogsMessageT[];
  addMessage: (value: string) => void;
};

export function DialogsMessages({ messages, addMessage }: DialogsMessagesPT) {
  return (
    <S.DialogsMessages direction={"column"} gap={"20px"}>
      <S.MessagesList>
        {messages.map((el) => (
          <DialogsMessage key={el.id} id={el.id} message={el.message} />
        ))}
      </S.MessagesList>
      <S.FormWrapper>
        <TextForm place={"Enter your message..."} callback={addMessage} />
      </S.FormWrapper>
    </S.DialogsMessages>
  );
}
