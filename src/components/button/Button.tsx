import { FC } from 'react'
import styled from 'styled-components'

type ButtonPT = {
  title: string
  callback: () => void
  submit?: boolean
  radius?: boolean
  disable?: boolean
}

export const Button: FC<ButtonPT> = ({ title, radius, disable, callback, submit }) => {
  const onClickHandler = () => {
    callback()
  }
  return (
    <StyledButton
      disabled={disable || false}
      onClick={onClickHandler}
      $radius={radius ? 'true' : 'false'}
      type={submit ? 'submit' : undefined}
    >
      {title}
    </StyledButton>
  )
}

type PropsType = {
  $radius: string
}

const StyledButton = styled.button<PropsType>`
  font-weight: 600;
  padding: 10px 13px;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: ${props => (props.$radius === 'true' ? '50%' : '0')};
  display: block;
  &:hover {
    background-color: ${props => props.theme.colors.accent2};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.secondaryFont};
    color: ${props => props.theme.colors.primaryFont};
    box-shadow: none;
  }
`
