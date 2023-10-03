import { Friends } from './Friends'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Friends> = {
  title: 'Profile/Friends/List',
  component: Friends,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    friends: {
      description: 'Object contains a list of friends and their total number',
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof Friends>

export const Demo: Story = {
  args: {
    friends: {
      list: [
        {
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
        {
          name: 'Friend2',
          id: 2,
          uniqueUrlName: null,
          photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user-small.jpg?v=1',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user.jpg?v=1',
          },
          status: '',
          followed: true,
        },
        {
          name: 'Friend3',
          id: 3,
          uniqueUrlName: null,
          photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user-small.jpg?v=1',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user.jpg?v=1',
          },
          status: '',
          followed: true,
        },
        {
          name: 'Friend4',
          id: 4,
          uniqueUrlName: null,
          photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user-small.jpg?v=1',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user.jpg?v=1',
          },
          status: '',
          followed: true,
        },
        {
          name: 'Friend5',
          id: 5,
          uniqueUrlName: null,
          photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user-small.jpg?v=1',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user.jpg?v=1',
          },
          status: '',
          followed: true,
        },
      ],
      count: 10,
    },
  },
}
