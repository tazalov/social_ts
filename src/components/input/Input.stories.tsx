import { Input } from './Input'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Id for label',
      control: 'text',
    },
    label: {
      description: 'Text for label',
      control: 'text',
    },
    error: {
      description: 'Status for error display',
      control: 'boolean',
    },
    errorText: {
      description: 'Text error (if error state === true)',
      control: 'text',
    },
    rows: {
      description: 'Flag for label and input location',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Demo: Story = {
  args: {
    id: 'input-demo-label-id',
    label: 'Label text',
    error: false,
    errorText: 'Some text error',
    rows: true,
  },
}
