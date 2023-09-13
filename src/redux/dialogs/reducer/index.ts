import { DialogsAT } from '../actions/types'
import { DialogsST } from './types'

const initialState: DialogsST = {
  list: [
    { id: 1, name: 'Iliya' },
    { id: 2, name: 'Dmitry' },
    { id: 3, name: 'Victor' },
    { id: 4, name: 'Dariya' },
    { id: 5, name: 'Alena' },
    { id: 6, name: 'Vladimir' },
    { id: 7, name: 'Tazazal' },
    { id: 8, name: 'Iron Man' },
    { id: 9, name: 'Blablabla' },
    { id: 10, name: 'Zxcxzczxc' },
  ],
  messages: [
    { id: 1, message: 'Lorem ipsum' },
    {
      id: 2,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 3,
      message: 'A molestiae praesentium quod! Earum hic necessitatibus temporibus!',
    },
    {
      id: 4,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    },
    { id: 5, message: 'Lorem ipsum' },
    {
      id: 6,
      message: 'A molestiae praesentium quod! Earum hic necessitatibus temporibus!',
    },
    { id: 7, message: 'Lorem ipsum' },
  ],
}

export const dialogsReducer = (state = initialState, action: DialogsAT) => {
  switch (action.type) {
    case 'social/profile/ADD_MESSAGE': {
      const newMessage = {
        id: state.messages.length + 2,
        message: action.messageText,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    }
    default: {
      return state
    }
  }
}
