import { DialogsList } from './DialogsList'

import { PagesDecorator } from '../../../utils/storybook/decorators/PagesDecorator'
import { RouterDecorator } from '../../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DialogsList> = {
  title: 'Dialogs/Dialogs/List',
  component: DialogsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    list: {
      description: 'Dialogs list',
      control: 'array',
    },
  },
  decorators: [RouterDecorator, PagesDecorator],
}

export default meta
type Story = StoryObj<typeof DialogsList>

export const Demo: Story = {
  args: {
    list: [
      { id: 1, name: 'Iliya' },
      { id: 2, name: 'Dmitry' },
      { id: 3, name: 'Victor' },
    ],
  },
}
