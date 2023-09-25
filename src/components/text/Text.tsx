import { FC } from 'react'
import styled from 'styled-components'

import { F } from '../../app/styles/Fragments.styled'

type TextPT = {
  title: string
  text: string
}

export const Text: FC<TextPT> = ({ title, text }) => {
  return (
    <StyledTextWrapper>
      <span>{title}: </span>
      <StyledText>{text}</StyledText>
    </StyledTextWrapper>
  )
}

const StyledTextWrapper = styled.div`
  ${F.Subtitle};
`

const StyledText = styled.span`
  color: ${(props) => props.theme.colors.accent2};
`
