import { Social, SocialId } from './Social'

import { ShadowDecorator } from '../../utils/storybook/decorators/ShadowDecorator'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Social> = {
  title: 'icons/Social',
  component: Social,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconId: {
      description: 'Id from icon-sprite.svg',
      control: 'select',
    },
    link: {
      description: 'Link to go when clicking on the icon',
      control: false,
    },
  },
  decorators: [ShadowDecorator],
}

export default meta
type Story = StoryObj<typeof Social>

export const Demo: Story = {
  args: {
    iconId: SocialId.FACEBOOK,
  },
}
