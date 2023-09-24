import { FC, InputHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

import { C } from '../../app/styles/Common.styled'
import { F } from '../../app/styles/Fragments.styled'
import { ErrorField } from '../errorField/ErrorField'

interface InputPT extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode
  error?: boolean
  errorText?: string
}

export const Input: FC<InputPT> = ({ label, error = false, errorText, ...restProps }) => {
  return (
    <C.FlexWrapper $direction={'column'} $gap={'5px'} $align={'center'}>
      {label && <Label>{label}</Label>}
      <C.FlexWrapper $direction={'column'} $gap={'5px'} $align={'center'}>
        <StyledInput {...restProps} />
        {error && <ErrorField>{errorText}</ErrorField>}
      </C.FlexWrapper>
    </C.FlexWrapper>
  )
}

const Label = styled.label`
  ${F.Subtitle};
`

const StyledInput = styled.input`
  width: 100%;
  padding: 3.5px;
  color: ${(props) => props.theme.colors.primaryFont};
  background-color: ${(props) => props.theme.colors.thirdBg};
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Arial',
    sans-serif;
`
