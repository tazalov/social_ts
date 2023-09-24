import { FC, memo } from 'react'
import { S } from './DialogsMessages.styled'

interface DialogsMessagePT {
  id: number
  message: string
}

export const DialogsMessage: FC<DialogsMessagePT> = memo(({ id, message }) => {
  return (
    <S.Message>
      <S.Text>{message}</S.Text>
      <S.Time>12/04/1996</S.Time>
    </S.Message>
  )
})
