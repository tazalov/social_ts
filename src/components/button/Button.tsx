import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styled from 'styled-components'

export enum ButtonVariant {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
}

interface ButtonPT extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

export const Button: FC<ButtonPT> = ({ children, variant = ButtonVariant.PRIMARY, type = 'button', ...restProps }) => {
  return (
    <StyledButton $variant={variant} {...restProps}>
      {children}
    </StyledButton>
  )
}

type PropsType = {
  $variant: ButtonVariant
}

export const StyledButton = styled.button<PropsType>`
  font-weight: 600;
  padding: ${({ $variant }) => ($variant === ButtonVariant.PRIMARY ? '10px 13px' : '5px')};
  background-color: ${({ $variant, theme }) =>
    $variant === ButtonVariant.PRIMARY ? theme.colors.accent : 'transparent'};
  color: ${({ $variant, theme }) => ($variant === ButtonVariant.PRIMARY ? 'white' : theme.colors.accent)};
  border: ${({ $variant, theme }) => ($variant === ButtonVariant.PRIMARY ? 0 : `2px solid ${theme.colors.accent}`)};
  border-radius: ${({ $variant }) => ($variant === ButtonVariant.PRIMARY ? 0 : '5px')};
  transition: all 0.3s ease;
  text-transform: uppercase;
  display: block;
  max-width: min-content;
  &:hover {
    background-color: ${({ $variant, theme }) =>
      $variant === ButtonVariant.PRIMARY ? theme.colors.accent2 : theme.colors.accent};
    color: ${({ $variant }) => $variant === ButtonVariant.OUTLINE && 'white'};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondaryFont};
    color: ${({ theme }) => theme.colors.primaryFont};
    box-shadow: none;
  }
`
