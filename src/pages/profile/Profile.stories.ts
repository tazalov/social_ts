import { Profile } from './Profile'

import avatar from '../../app/assets/images/carrepair.webp'
import { PagesDecorator } from '../../utils/storybook/decorators/PagesDecorator'
import { RouterDecorator } from '../../utils/storybook/decorators/RouterDecorator'
import { StoreDecorator } from '../../utils/storybook/decorators/StoreDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Profile> = {
  title: 'pages/Profile',
  component: Profile,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    profile: {
      description: 'User profile',
      control: 'object',
    },
    friends: {
      description: 'Friends list',
      control: 'object',
    },
    posts: {
      description: 'Posts list',
      control: 'array',
    },
    addPost: {
      description: 'Function for add post',
      action: 'post added!',
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
  decorators: [StoreDecorator, RouterDecorator, PagesDecorator],
}

export default meta
type Story = StoryObj<typeof Profile>

export const Demo: Story = {
  args: {
    profile: {
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
        small: avatar,
        large: avatar,
      },
    },
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
    friends: {
      list: [
        {
          name: 'noidorus5555',
          id: 30000,
          uniqueUrlName: null,
          photos: {
            small: null,
            large: null,
          },
          status: null,
          followed: true,
        },
        {
          name: 'Stil',
          id: 29983,
          uniqueUrlName: null,
          photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user-small.jpg?v=1',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/29983/user.jpg?v=1',
          },
          status: 'Fine!!!!',
          followed: true,
        },
        {
          name: '12345',
          id: 29916,
          uniqueUrlName: null,
          photos: {
            small: 'https://social-network.samuraijs.com/activecontent/images/users/29916/user-small.jpg?v=1',
            large: 'https://social-network.samuraijs.com/activecontent/images/users/29916/user.jpg?v=1',
          },
          status: 't343434123',
          followed: true,
        },
        {
          name: 'Yamihimo',
          id: 29880,
          uniqueUrlName: null,
          photos: {
            small: null,
            large: null,
          },
          status: null,
          followed: true,
        },
        {
          name: 'HelalsNOW',
          id: 29559,
          uniqueUrlName: null,
          photos: {
            small: null,
            large: null,
          },
          status: null,
          followed: true,
        },
        {
          name: 'IbRuslan2',
          id: 29558,
          uniqueUrlName: null,
          photos: {
            small: null,
            large: null,
          },
          status: null,
          followed: true,
        },
      ],
      count: 10,
    },
    isOwner: true,
  },
}
