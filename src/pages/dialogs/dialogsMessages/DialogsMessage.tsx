import { FC } from 'react'
import { S } from './DialogsMessages.styled'

type DialogsMessagePT = {
  id: number
  message: string
}

export const DialogsMessage: FC<DialogsMessagePT> = ({ id, message }) => (
  <S.Message>
    <S.Text>{message}</S.Text>
    <S.Time>12/04/1996</S.Time>
  </S.Message>
)
