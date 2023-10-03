import { DialogsMessage } from './DialogsMessage'

import { PagesDecorator } from '../../../../utils/storybook/decorators/PagesDecorator'
import { RouterDecorator } from '../../../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DialogsMessage> = {
  title: 'Dialogs/Messages/Item',
  component: DialogsMessage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: {
      description: 'Text message',
      control: 'text',
    },
  },
  decorators: [RouterDecorator, PagesDecorator],
}

export default meta
type Story = StoryObj<typeof DialogsMessage>

export const Demo: Story = {
  args: {
    message: 'New message',
  },
}
