import { Dialogs } from './DialogsContainer'

import { PagesDecorator } from '../../utils/storybook/decorators/PagesDecorator'
import { RouterDecorator } from '../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dialogs> = {
  title: 'pages/Dialogs',
  component: Dialogs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    list: {
      description: 'Dialogs list',
      control: 'array',
    },
    messages: {
      description: 'Messages list',
      control: 'array',
    },
    addMessage: {
      description: 'Function for add message',
      action: 'Message added!',
    },
  },
  decorators: [RouterDecorator, PagesDecorator],
}

export default meta
type Story = StoryObj<typeof Dialogs>

export const Demo: Story = {
  args: {
    list: [
      { id: 1, name: 'Iliya' },
      { id: 2, name: 'Dmitry' },
      { id: 3, name: 'Victor' },
      { id: 4, name: 'Dariya' },
      { id: 5, name: 'Alena' },
    ],
    messages: [
      { id: 1, message: 'Lorem ipsum' },
      { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
      { id: 3, message: 'A molestiae praesentium quod! Earum hic necessitatibus temporibus!' },
      { id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' },
      { id: 5, message: 'Lorem ipsum' },
    ],
  },
}
