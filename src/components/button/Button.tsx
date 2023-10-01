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
  padding: ${(props) => (props.$variant === ButtonVariant.PRIMARY ? '10px 13px' : '5px')};
  background-color: ${(props) =>
    props.$variant === ButtonVariant.PRIMARY ? props.theme.colors.accent : 'transparent'};
  color: ${(props) => (props.$variant === ButtonVariant.PRIMARY ? 'white' : props.theme.colors.accent)};
  border: ${(props) => (props.$variant === ButtonVariant.PRIMARY ? 0 : `2px solid ${props.theme.colors.accent}`)};
  border-radius: ${(props) => (props.$variant === ButtonVariant.PRIMARY ? 0 : '5px')};
  transition: all 0.3s ease;
  text-transform: uppercase;
  display: block;
  max-width: min-content;
  &:hover {
    background-color: ${(props) =>
      props.$variant === ButtonVariant.PRIMARY ? props.theme.colors.accent2 : props.theme.colors.accent};
    color: ${(props) => props.$variant === ButtonVariant.OUTLINE && props.theme.colors.thirdBg};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.secondaryFont};
    color: ${(props) => props.theme.colors.primaryFont};
    box-shadow: none;
  }
`
