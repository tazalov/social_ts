import styled from 'styled-components'

import { C } from '../../app/styles/Common.styled'

const ErrorWrapper = styled(C.FlexWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.primaryBg};
`
const Error = styled.div`
  max-width: 300px;
  max-height: 300px;
  color: ${(props) => props.theme.colors.primaryFont};
  font-size: 30px;
  & a {
    color: ${(props) => props.theme.colors.secondaryFont};
  }
`

export const S = { Error, ErrorWrapper }
