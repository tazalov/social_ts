import { FC, memo, ReactNode } from 'react'
import styled from 'styled-components'

import { C } from '../../app/styles/Common.styled'
import { F } from '../../app/styles/Fragments.styled'

type TitleBlockPT = {
  title: string | ReactNode
}

export const TitleBlock: FC<TitleBlockPT> = memo(({ title }) => {
  return (
    <TitleWrapper $justify={'center'} $align={'center'}>
      <Title>{title}</Title>
    </TitleWrapper>
  )
})

const TitleWrapper = styled(C.FlexWrapper)`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => {
    const { name, colors } = props.theme
    return name === 'light' ? colors.secondaryFont : colors.primaryFont
  }};
  padding: 15px 20px;
`

const Title = styled.h2`
  ${F.Subtitle};
  span {
    color: ${(props) => {
      const { name, colors } = props.theme
      return name === 'light' ? colors.primaryFont : colors.secondaryFont
    }};
    font-size: 14px;
    padding: 5px;
  }
`
