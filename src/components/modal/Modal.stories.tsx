import { Modal } from './Modal'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      description: 'Value for switching the visibility of the modal window.',
      control: 'boolean',
    },
    children: {
      description: 'Content of the modal window - test or React component',
      defaultValue: 'Here be text or other React component',
      control: 'text',
    },
    onClose: {
      description: 'Function for closing the modal window (works by pressing Esc or clicking outside the modal window)',
      action: 'Modal window was closed',
    },
    element: {
      description: 'Target html element to which the modal window will be transferred',
    },
  },
  decorators: [
    (Story) => (
      <div id={'modal-decorator'}>
        <Story />
      </div>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof Modal>

export const Demo: Story = {
  args: {
    isOpen: false,
    children: 'Here be text or other React component',
  },
}
