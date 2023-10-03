import { DialogsListItem } from './DialogsListItem'

import { PagesDecorator } from '../../../../utils/storybook/decorators/PagesDecorator'
import { RouterDecorator } from '../../../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DialogsListItem> = {
  title: 'Dialogs/Dialogs/Item',
  component: DialogsListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      description: 'User name',
      control: 'text',
    },
  },
  decorators: [RouterDecorator, PagesDecorator],
}

export default meta
type Story = StoryObj<typeof DialogsListItem>

export const Demo: Story = {
  args: {
    name: 'Full name',
  },
}
