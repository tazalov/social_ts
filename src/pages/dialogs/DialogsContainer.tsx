import { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { S } from './Dialogs.styled'
import { DialogsList } from './dialogsList/DialogsList'
import { DialogsMessages } from './dialogsMessages/DialogsMessages'

import { addMessage, getDialogsState, DialogsST } from '../../redux/dialogs-reducer'
import { RootStateT } from '../../redux/store'
import { redirectToLogin } from '../../utils/hoc/redirectToLogin'

type DialogsPT = DialogsST & MapDispatchPT

const Dialogs: FC<DialogsPT> = ({ list, messages, addMessage }) => {
  return (
    <S.Dialogs>
      <DialogsList list={list} />
      <DialogsMessages messages={messages} addMessage={addMessage} />
    </S.Dialogs>
  )
}

interface MapDispatchPT {
  addMessage: (message: string) => void
}

export default compose<ComponentType>(
  connect<DialogsST, MapDispatchPT, unknown, RootStateT>(getDialogsState, {
    addMessage,
  }),
  redirectToLogin,
)(Dialogs)
