import { ErrorField } from './ErrorField'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ErrorField> = {
  title: 'components/ErrorField',
  component: ErrorField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ErrorField>

export const Demo: Story = {
  args: {
    children: 'Some error message',
  },
}
