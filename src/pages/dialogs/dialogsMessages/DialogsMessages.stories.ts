import { DialogsMessages } from './DialogsMessages'

import { PagesDecorator } from '../../../utils/storybook/decorators/PagesDecorator'
import { RouterDecorator } from '../../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DialogsMessages> = {
  title: 'Dialogs/Messages/List',
  component: DialogsMessages,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
type Story = StoryObj<typeof DialogsMessages>

export const Demo: Story = {
  args: {
    messages: [
      { id: 1, message: 'Lorem ipsum' },
      { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
      { id: 3, message: 'A molestiae praesentium quod! Earum hic necessitatibus temporibus!' },
    ],
  },
}
