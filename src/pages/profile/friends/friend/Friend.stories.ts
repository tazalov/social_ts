import { Friend } from './Friend'

import { ShadowDecorator } from '../../../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Friend> = {
  title: 'Profile/Friends/Item',
  component: Friend,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    friend: {
      description: 'Object contains friend info',
      control: 'object',
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof Friend>

export const Demo: Story = {
  args: {
    friend: {
      name: 'Friend1',
      id: 1,
      uniqueUrlName: null,
      photos: {
        small: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user-small.jpg?v=1',
        large: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user.jpg?v=1',
      },
      status: '',
      followed: true,
    },
  },
}
