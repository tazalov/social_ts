import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => <StyledInput {...props} />

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
