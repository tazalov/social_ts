import { TextForm } from './TextForm'

import { ShadowDecorator } from '../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextForm> = {
  title: 'components/TextForm',
  component: TextForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'Input placeholder',
      control: 'text',
    },
    callback: {
      description: 'Callback for add item',
      control: 'false',
      action: 'item have been added!',
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof TextForm>

export const Demo: Story = {
  args: {
    placeholder: 'i am a placeholder',
  },
}
