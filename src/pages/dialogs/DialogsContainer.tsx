import { FC } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../../redux/dialogs/actions'
import { DialogsST } from '../../redux/dialogs/reducer/types'
import { AppStateT } from '../../redux/store'
import { S } from './Dialogs.styled'
import { DialogsList } from './dialogsList/DialogsList'
import { DialogsMessages } from './dialogsMessages/DialogsMessages'

type DialogsPT = DialogsST & MapDispatchPT

const Dialogs: FC<DialogsPT> = ({ list, messages, addMessage }) => (
  <S.Dialogs>
    <DialogsList list={list} />
    <DialogsMessages messages={messages} addMessage={addMessage} />
  </S.Dialogs>
)

const mapStateToProps = (state: AppStateT): DialogsST => ({
  list: state.dialogs.list,
  messages: state.dialogs.messages,
})

interface MapDispatchPT {
  addMessage: (message: string) => void
}

export default connect<DialogsST, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  addMessage,
})(Dialogs)
