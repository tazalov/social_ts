import { ProfileInfo } from './ProfileInfo'

import { StoreDecorator } from '../../../utils/storybook/decorators/StoreDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProfileInfo> = {
  title: 'Profile/ProfileInfo',
  component: ProfileInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    profile: {
      description: 'User profile',
      control: 'object',
    },
    updatePhoto: {
      description: 'Function for upload new avatar',
      action: 'avatar changed!',
    },
    updateProfile: {
      description: 'Function for update profile info',
      action: 'profile updated!',
    },
    isOwner: {
      description: 'A flag that hides some interface elements if the user is not on their profile',
      control: 'boolean',
    },
    errorUpdate: {
      description: 'Text error when user update profile',
      control: 'text',
    },
  },
  decorators: [StoreDecorator],
}

export default meta
type Story = StoryObj<typeof ProfileInfo>

export const Demo: Story = {
  args: {
    profile: {
      aboutMe: 'developer',
      contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
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
    },
    isOwner: true,
  },
}
