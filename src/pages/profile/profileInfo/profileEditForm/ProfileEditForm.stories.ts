import { ProfileEditForm } from './ProfileEditForm'

import { ShadowDecorator } from '../../../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProfileEditForm> = {
  title: 'Profile/ProfileEditForm',
  component: ProfileEditForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    profile: {
      description: 'User profile',
      control: 'object',
    },
    updateProfile: {
      description: 'Function for update profile info',
      action: 'profile updated!',
    },
    error: {
      description: 'Text server error when user update profile',
      control: 'text',
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof ProfileEditForm>

const profileInfo = {
  aboutMe: 'JavaScript developer',
  contacts: {
    facebook: 'facebook.com',
    website: null,
    vk: 'vk.com',
    twitter: 'https://twitter.com',
    instagram: null,
    youtube: null,
    github: 'github.com',
    mainLink: null,
  },
  lookingForAJob: true,
  lookingForAJobDescription: 'Frontend developer',
  fullName: 'TAZALOV',
  userId: 2,
  photos: {
    small: 'https://papik.pro/uploads/posts/2023-01/1674100238_papik-pro-p-programmist-risunok-16.jpg',
    large: 'https://papik.pro/uploads/posts/2023-01/1674100238_papik-pro-p-programmist-risunok-16.jpg',
  },
}

export const Demo: Story = {
  args: {
    profile: profileInfo,
  },
}

export const Error: Story = {
  args: {
    profile: profileInfo,
    error: 'Some server error',
  },
}
