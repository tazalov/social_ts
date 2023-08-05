import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { C } from "../../../components/Common.styled";

//friends
const Friends = styled(C.ShadowContainer)`
  height: min-content;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
`;

//friend
const Friend = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const Name = styled.div`
  margin: 10px 0 0 0;
  color: white;
  text-align: center;
`;

export const S = {
  Friends,
  List,
  Friend,
  Name,
};
