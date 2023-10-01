import { Error } from './Error'

import { RouterDecorator } from '../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Error> = {
  title: 'pages/Error',
  component: Error,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [RouterDecorator],
}

export default meta
type Story = StoryObj<typeof Error>

export const Demo: Story = {
  args: {},
}
