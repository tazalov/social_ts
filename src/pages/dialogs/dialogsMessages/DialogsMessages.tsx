import { FC } from 'react'
import { TextForm } from '../../../components/textForm/textForm'
import { DialogsMessageT } from '../../../redux/dialogs/reducer/types'
import { DialogsMessage } from './DialogsMessage'
import { S } from './DialogsMessages.styled'

interface DialogsMessagesPT {
  messages: DialogsMessageT[]
  addMessage: (value: string) => void
}

export const DialogsMessages: FC<DialogsMessagesPT> = ({ messages, addMessage }) => (
  <S.DialogsMessages $direction={'column'} $gap={'20px'}>
    <S.MessagesList>
      {messages.map(el => (
        <DialogsMessage key={el.id} id={el.id} message={el.message} />
      ))}
    </S.MessagesList>
    <S.FormWrapper>
      <TextForm place={'Enter your message...'} callback={addMessage} />
    </S.FormWrapper>
  </S.DialogsMessages>
)
