import { AddMessageAT } from '../../types/dialogs.actions'

export const addMessage = (messageText: string): AddMessageAT => ({
  type: 'social/profile/ADD_MESSAGE',
  messageText,
})
