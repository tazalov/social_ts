import { Post } from './Post'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Post> = {
  title: 'Profile/Posts/Post',
  component: Post,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    post: {
      description: 'Current post object',
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof Post>

export const Demo: Story = {
  args: {
    post: {
      id: 1,
      user: 'Tazalov',
      text: "it' my first post",
      likes: 12,
    },
  },
}
