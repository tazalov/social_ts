import { FC } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AuthST } from '../../redux/auth/reducer/types'
import { addMessage } from '../../redux/dialogs/actions'
import { DialogsST } from '../../redux/dialogs/reducer/types'
import { AppStateT } from '../../redux/store'
import { S } from './Dialogs.styled'
import { DialogsList } from './dialogsList/DialogsList'
import { DialogsMessages } from './dialogsMessages/DialogsMessages'

type DialogsPT = MapStatePT & MapDispatchPT

const Dialogs: FC<DialogsPT> = ({ isAuth, list, messages, addMessage }) => {
  return isAuth ? (
    <S.Dialogs>
      <DialogsList list={list} />
      <DialogsMessages messages={messages} addMessage={addMessage} />
    </S.Dialogs>
  ) : (
    <Redirect to={'/login'} />
  )
}

type MapStatePT = DialogsST & Pick<AuthST, 'isAuth'>

const mapStateToProps = (state: AppStateT): MapStatePT => ({
  list: state.dialogs.list,
  messages: state.dialogs.messages,
  isAuth: state.auth.isAuth,
})

interface MapDispatchPT {
  addMessage: (message: string) => void
}

export default connect<MapStatePT, MapDispatchPT, unknown, AppStateT>(mapStateToProps, {
  addMessage,
})(Dialogs)
