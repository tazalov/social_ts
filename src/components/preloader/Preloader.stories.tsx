import { Preloader } from './Preloader'

import { ShadowDecorator } from '../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Preloader> = {
  title: 'components/Preloader',
  component: Preloader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size preloader (px)',
      control: 'number',
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof Preloader>

export const Demo: Story = {
  args: {
    size: 100,
  },
}
