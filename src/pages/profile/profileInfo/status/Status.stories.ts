import { Status } from './Status'

import { ShadowDecorator } from '../../../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Status> = {
  title: 'Profile/Status',
  component: Status,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    userId: {
      description:
        'Current profile id, if it does not match the id of the authorized user, then the status change is not available ',
      control: 'number',
    },
    id: {
      description: 'Current authorized user id',
      control: 'number',
    },
    status: {
      description: 'Status text',
      control: 'text',
    },
    updateStatusProfile: {
      description: 'Function for update status',
      action: 'Status updated!',
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof Status>

export const Demo: Story = {
  args: {
    userId: 1,
    id: 1,
    status: 'Current status',
  },
}
