import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../../styles/Theme";
import { F } from "../../../components/Fragments.styled";
import { C } from "../../../components/Common.styled";

const DialogsList = styled(C.ShadowContainer)`
  height: 100%;
`;

const List = styled.ul`
  ${F.Scroll};
  height: 100%;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
`;

const ItemLink = styled(NavLink)`
  padding: 10px;
  cursor: pointer;
  display: block;
  &.active,
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const ItemText = styled.div`
  ${F.Subtitle}
`;

export const S = {
  DialogsList,
  List,
  ItemLink,
  ItemText,
};
