import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { C } from '../../styles/Common.styled'
import { F } from '../../styles/Fragments.styled'

interface InputPT extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  errorText?: string
}

export const Input: FC<InputPT> = ({ label, error = false, errorText, ...restProps }) => {
  return (
    <C.FlexWrapper $direction={'column'} $gap={'5px'} $align={'center'}>
      {label && <Label>{label}</Label>}
      <C.FlexWrapper $direction={'column'} $gap={'5px'} $align={'center'}>
        <StyledInput {...restProps} />
        {error && <Error>{errorText}</Error>}
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
  color: ${props => props.theme.colors.primaryFont};
  background-color: ${props => props.theme.colors.thirdBg};
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Arial',
    sans-serif;
`
const Error = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 14px;
  font-weight: 600;
`
