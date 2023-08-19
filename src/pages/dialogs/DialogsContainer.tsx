import { FC } from 'react'
import { connect } from 'react-redux'
import {
  addMessage,
  DialogsListItemT,
  DialogsMessageT,
  InitialStateT,
} from '../../redux/dialogs.reducer'
import { AppStateT } from '../../redux/store'
import { S } from './Dialogs.styled'
import { DialogsList } from './dialogsList/DialogsList'
import { DialogsMessages } from './dialogsMessages/DialogsMessages'

type DialogsPT = {
  list: DialogsListItemT[]
  messages: DialogsMessageT[]
  addMessage: (message: string) => void
}

const Dialogs: FC<DialogsPT> = ({ list, messages, addMessage }) => (
  <S.Dialogs>
    <DialogsList list={list} />
    <DialogsMessages messages={messages} addMessage={addMessage} />
  </S.Dialogs>
)

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  list: state.dialogs.list,
  messages: state.dialogs.messages,
})

type MapDispatchPT = {
  addMessage: (message: string) => void
}

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  addMessage,
})(Dialogs)
