import styled from 'styled-components'
import { C } from '../../../styles/Common.styled'

//friends
const Friends = styled(C.ShadowContainer)`
  height: min-content;
  min-width: 300px;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
`

//friend
const Friend = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.thirdBg};
  }
`

const Name = styled.div`
  margin: 10px 0 0 0;
  color: ${props => props.theme.colors.primaryFont};
  text-align: center;
`

export const S = {
  Friends,
  List,
  Friend,
  Name,
}
