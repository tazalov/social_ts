import { Text } from './Text'

import { ShadowDecorator } from '../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Text> = {
  title: 'components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Text title',
      control: 'text',
    },
    text: {
      description: 'Text',
      control: 'text',
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof Text>

export const Demo: Story = {
  args: {
    title: 'I am a title',
    text: 'i am a text',
  },
}
