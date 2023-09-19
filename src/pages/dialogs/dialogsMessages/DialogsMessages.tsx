import { FC } from 'react'
import { TextForm } from '../../../components/textForm/textForm'
import { DialogsMessageT } from '../../../redux/dialogs-reducer'
import { DialogsMessage } from './DialogsMessage'
import { S } from './DialogsMessages.styled'

interface DialogsMessagesPT {
  messages: DialogsMessageT[]
  addMessage: (value: string) => void
}

export const DialogsMessages: FC<DialogsMessagesPT> = ({ messages, addMessage }) => {
  const messagesList = messages.map(el => (
    <DialogsMessage key={el.id} id={el.id} message={el.message} />
  ))
  return (
    <S.DialogsMessages $direction={'column'} $gap={'20px'}>
      <S.MessagesList>{messagesList}</S.MessagesList>
      <S.FormWrapper>
        <TextForm placeholder={'Enter your message...'} callback={addMessage} />
      </S.FormWrapper>
    </S.DialogsMessages>
  )
}
