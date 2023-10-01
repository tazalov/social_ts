import { StoryFn } from '@storybook/react'

import { C } from '../../../app/styles/Common.styled'

export const ShadowDecorator = (Story: StoryFn) => (
  <C.ShadowContainer style={{ padding: '10px' }}>
    <Story />
  </C.ShadowContainer>
)
