import { User } from './User'

import { ShadowDecorator } from '../../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof User> = {
  title: 'Users/User',
  component: User,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    user: {
      description: 'Object - have user info',
      control: 'object',
    },
    progressFollow: {
      description: 'Flag to show loader, when request for follow/unfollow is send',
      control: false,
    },
    follow: {
      description: 'Function to follow to user',
      action: 'you followed this user!',
    },
    unfollow: {
      description: 'Function to unfollow to user',
      action: 'you unfollowed this user!',
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof User>

export const Demo: Story = {
  args: {
    user: {
      name: 'Some user',
      id: 1,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: 'My status very loooooooooong',
      followed: false,
    },
    progressFollow: {
      userId: [],
      isFetch: false,
    },
  },
}
