import { RootStateT } from '../../../store'
import { DialogsST } from '../../types/dialogs.reducer'

export const getDialogsState = (state: RootStateT): DialogsST => state.dialogs
