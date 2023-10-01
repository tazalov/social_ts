import { Pagination } from './Pagination'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  title: 'components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalCount: {
      description: 'Total count items',
      control: 'number',
    },
    currentPage: {
      description: 'Current page',
      control: 'number',
    },
    pageSize: {
      description: 'Count items on one page',
      control: false,
    },
    setPage: {
      description: 'Function for changing the current page',
      action: 'current page change!',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Demo: Story = {
  args: {
    totalCount: 1000,
    currentPage: 1,
    pageSize: 10,
  },
}
