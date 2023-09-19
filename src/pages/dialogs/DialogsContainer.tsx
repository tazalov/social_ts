import { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addMessage, DialogsST } from '../../redux/dialogs-reducer'
import { RootStateT } from '../../redux/store'
import { redirectToLogin } from '../../app/utils/hoc/redirectToLogin'
import { S } from './Dialogs.styled'
import { DialogsList } from './dialogsList/DialogsList'
import { DialogsMessages } from './dialogsMessages/DialogsMessages'

type DialogsPT = DialogsST & MapDispatchPT

const Dialogs: FC<DialogsPT> = ({ list, messages, addMessage }) => {
  return (
    <S.Dialogs>
      <DialogsList list={list} />
      <DialogsMessages messages={messages} addMessage={addMessage} />
    </S.Dialogs>
  )
}

const mapStateToProps = (state: RootStateT): DialogsST => ({
  list: state.dialogs.list,
  messages: state.dialogs.messages,
})

interface MapDispatchPT {
  addMessage: (message: string) => void
}

export default compose<ComponentType>(
  connect<DialogsST, MapDispatchPT, unknown, RootStateT>(mapStateToProps, {
    addMessage,
  }),
  redirectToLogin,
)(Dialogs)
