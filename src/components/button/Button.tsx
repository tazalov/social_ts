import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styled from 'styled-components'

type HTMLButtonT = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'>

interface ButtonPT extends HTMLButtonT {
  title: string | ReactNode
  callback?: () => void
  radius?: boolean
  disable?: boolean
}

export const Button: FC<ButtonPT> = ({
  title,
  radius,
  disable,
  callback,
  type = 'button',
  ...restProps
}) => {
  const onClickHandler = () => {
    callback?.()
  }
  return (
    <StyledButton
      disabled={disable || false}
      onClick={onClickHandler}
      $radius={radius ? 'true' : 'false'}
      type={type}
      {...restProps}
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
  max-width: min-content;
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.secondaryFont};
    color: ${props => props.theme.colors.primaryFont};
    box-shadow: none;
  }
`
