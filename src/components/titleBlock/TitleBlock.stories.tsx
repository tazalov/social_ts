import { TitleBlock } from './TitleBlock'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TitleBlock> = {
  title: 'components/TitleBlock',
  component: TitleBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Text title',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof TitleBlock>

export const Demo: Story = {
  args: {
    title: 'I am a title',
  },
}
