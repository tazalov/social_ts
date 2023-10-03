import { About } from './About'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof About> = {
  title: 'Profile/About',
  component: About,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    about: {
      description: 'Info about user',
      control: 'text',
    },
    lookingForAJob: {
      description: 'Flag to change status looking job',
      control: 'boolean',
    },
    contacts: {
      description: 'Object with social links',
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof About>

export const Demo: Story = {
  args: {
    about: 'About user info',
    lookingForAJob: true,
    contacts: {
      github: 'github.com',
      youtube: 'youtube.com',
      instagram: null,
      twitter: null,
      website: null,
      vk: null,
      facebook: null,
      mainLink: null,
    },
  },
}
