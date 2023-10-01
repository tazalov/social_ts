import { Avatar } from './Avatar'

import AvatarDemo from '../../app/assets/images/anynft.webp'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  title: 'components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    img: {
      description: 'String URL for image',
      control: false,
    },
    w: {
      description: 'Width image (number to px)',
    },
    h: {
      description: 'Height image (number to px)',
    },
    pos_styles: {
      description: 'Styles for position (css fragment into Styled components)',
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Demo: Story = {
  args: {
    img: AvatarDemo,
    w: 100,
    h: 100,
  },
}
