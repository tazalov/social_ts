import { Error } from './Error'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Error> = {
  title: 'pages/Error',
  component: Error,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Error>

export const Demo: Story = {
  args: {},
}
