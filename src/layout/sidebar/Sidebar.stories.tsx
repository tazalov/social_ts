import { Sidebar } from './Sidebar'

import { RouterDecorator } from '../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Sidebar> = {
  title: 'layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  decorators: [RouterDecorator],
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const LoggedIn: Story = {
  args: {},
}
