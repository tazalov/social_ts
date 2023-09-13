import { AddMessageAT } from './types'

export const addMessage = (messageText: string): AddMessageAT => ({
  type: 'social/profile/ADD_MESSAGE',
  messageText,
})
