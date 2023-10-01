import { StoryFn } from '@storybook/react'

import { C } from '../../../app/styles/Common.styled'

import { Main } from '../../../layout'

export const PagesDecorator = (Story: StoryFn) => (
  <C.Container>
    <Main>
      <Story />
    </Main>
  </C.Container>
)
