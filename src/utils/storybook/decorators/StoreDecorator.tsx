import { StoryFn } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '../../../redux/store'

export const StoreDecorator = (Story: StoryFn) => (
  <Provider store={store}>
    <Story />
  </Provider>
)
