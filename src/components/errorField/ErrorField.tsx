import { FC } from 'react'
import styled from 'styled-components'

export const ErrorField: FC = ({ children }) => {
  return <Error>{children}</Error>
}

const Error = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`
