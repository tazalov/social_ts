import { addMessage } from '../model/actions/dialogs.actions'
import { dialogsReducer } from '../model/dialogs.reducer'
import { DialogsST } from '../types/dialogs.reducer'

const startState: DialogsST = {
  list: [{ id: 3, name: 'Victor' }],
  messages: [
    { id: 1, message: 'Lorem ipsum' },
    { id: 2, message: 'Earum hic necessitatibus temporibus!' },
    { id: 3, message: 'A molestiae praesentium quod!' },
  ],
}

describe('dialogsReducer', () => {
  it('new message has been added', () => {
    const action = addMessage('new message text')

    const endState = dialogsReducer(startState, action)

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].id).toBe(5)
    expect(endState.messages[3].message).toBe('new message text')
  })
})
