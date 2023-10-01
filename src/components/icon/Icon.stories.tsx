import { Icon } from './Icon'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Icon> = {
  title: 'icons/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconId: {
      description: 'Id from icon-sprite.svg',
      control: false,
    },
    width: {
      description: 'Width svg-icon (+ px)',
    },
    height: {
      description: 'Width svg-icon (+ px)',
    },
    viewBox: {
      description: 'View box svg-icon',
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Demo: Story = {
  args: {
    iconId: 'logo',
  },
}
