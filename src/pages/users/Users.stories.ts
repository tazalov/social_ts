import { UsersC } from './UsersContainer'

import { PagesDecorator } from '../../utils/storybook/decorators/PagesDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof UsersC> = {
  title: 'pages/Users',
  component: UsersC,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    list: {
      description: 'Users list',
      control: 'object',
    },
    totalCount: {
      description: 'Total count users',
      control: 'number',
    },
    pageSize: {
      description: 'Page size for request (default 10)',
      control: false,
    },
    currentPage: {
      description: 'Current page for paginator',
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    progressFollow: {
      description: 'Flag to show loader, when request for follow/unfollow is send',
      control: false,
    },
    isPageLoading: {
      description: 'Flag to show loader, when request for get users is send',
      control: false,
    },
    getUsers: {
      description: 'Function for send request to get users',
      action: 'new users getting!',
    },
    setCurrentPage: {
      description: 'Function for paginator for change page',
      action: 'page is change!',
    },
    setFollow: {
      description: 'Function to follow to user',
      action: 'you followed this user!',
    },
    setUnfollow: {
      description: 'Function to unfollow to user',
      action: 'you unfollowed this user!',
    },
  },
  decorators: [PagesDecorator],
}

export default meta
type Story = StoryObj<typeof UsersC>

export const Demo: Story = {
  args: {
    list: [
      {
        name: 'emelianoff',
        id: 30091,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: true,
      },
      {
        name: 'UnArc',
        id: 30090,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: true,
      },
      {
        name: 'flofeyka',
        id: 30089,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: 'AndreyMgn',
        id: 30088,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: 'EugeneSokol',
        id: 30087,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: 'nazaria',
        id: 30086,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: 'Zdravii_dviz5',
        id: 30085,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: 'Zdravii_dviz4',
        id: 30084,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: 'aLI22',
        id: 30083,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
      {
        name: 'rainbow2',
        id: 30082,
        uniqueUrlName: null,
        photos: {
          small: null,
          large: null,
        },
        status: null,
        followed: false,
      },
    ],
    isPageLoading: false,
    progressFollow: {
      userId: [],
      isFetch: false,
    },
    currentPage: 1,
    pageSize: 10,
    totalCount: 1000,
  },
}
