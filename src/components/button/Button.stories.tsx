import { Button, ButtonVariant } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Theme for button',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: ButtonVariant.OUTLINE,
  },
}
