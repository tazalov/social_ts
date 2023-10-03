import { Login } from './Login'

import captcha from '../../app/assets/images/example-captcha.png'
import { PagesDecorator } from '../../utils/storybook/decorators/PagesDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Login> = {
  title: 'pages/Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isAuth: {
      description: 'Flag to redirect to profile, if user authorized',
      control: false,
    },
    error: {
      description: 'Text error when form submit',
      control: 'text',
    },
    captcha: {
      description: 'URL image for anti-bot symbols',
      control: false,
    },
    loginUser: {
      description: 'Function for submit form',
    },
  },
  decorators: [PagesDecorator],
}

export default meta
type Story = StoryObj<typeof Login>

export const Demo: Story = {
  args: {},
}

export const Error: Story = {
  args: {
    error: 'Some server error',
  },
}

export const Captcha: Story = {
  args: {
    captcha: captcha,
    error: 'Incorrect anti-bot symbols',
  },
}
