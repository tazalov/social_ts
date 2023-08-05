import { S } from "./DialogsMessages.styled";

type DialogsMessagePT = {
  id: number;
  message: string;
};

export function DialogsMessage({ id, message }: DialogsMessagePT) {
  return (
    <S.Message>
      <S.Text>{message}</S.Text>
      <S.Time>12/04/1996</S.Time>
    </S.Message>
  );
}
