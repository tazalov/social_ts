import { Header } from './Header'

import { RouterDecorator } from '../../utils/storybook/decorators/RouterDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
  title: 'layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isAuth: {
      description: 'Flag for authentication',
      control: 'boolean',
    },
    login: {
      description: 'User login',
    },
    logout: {
      description: 'Function for logout',
      action: 'you are logout!',
    },
    toggleTheme: {
      description: 'Function for change theme',
      action: 'theme is changed!',
    },
  },
  decorators: [RouterDecorator],
}

export default meta
type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {
  args: {
    isAuth: true,
    login: 'admin',
  },
}

export const LoggedOut: Story = {
  args: {
    isAuth: false,
  },
}
