import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonBPT {
  title: string | ReactNode
  disable?: boolean
  callback: () => void
}

export const ButtonB: FC<ButtonBPT> = ({ title, disable, callback }) => {
  const onClickHandler = () => {
    callback()
  }
  return (
    <StyledButton disabled={disable || false} onClick={onClickHandler}>
      {title}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 5px;
  color: ${props => props.theme.colors.secondaryFont};
  border: 1px solid ${props => props.theme.colors.secondaryFont};
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-align: center;
  border-radius: 5px;
  display: block;
  font-size: 14px;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryFont};
    border: 1px solid ${props => props.theme.colors.secondaryFont};
    color: ${props => props.theme.colors.thirdBg};
  }
`
