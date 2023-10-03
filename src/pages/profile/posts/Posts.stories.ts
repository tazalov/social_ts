import { Posts } from './Posts'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Posts> = {
  title: 'Profile/Posts',
  component: Posts,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    posts: {
      description: 'Posts array',
      control: false,
    },
    addPost: {
      description: 'Function for add post',
      action: 'post added!',
    },
  },
}

export default meta
type Story = StoryObj<typeof Posts>

export const Demo: Story = {
  args: {
    posts: [
      {
        id: 1,
        user: 'Tazalov',
        text: "it' my first post",
        likes: 12,
      },
      {
        id: 2,
        user: 'Dariya',
        text: "it' my second post",
        likes: 22,
      },
    ],
  },
}
