import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { F } from "../../components/Fragments.styled";

const Sidebar = styled.nav``;

const SidebarItem = styled.li``;

const SidebarLink = styled(NavLink)`
  ${F.Subtitle};
  padding: 15px 150px 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  &.active,
  &:hover {
    background-color: ${(props) => props.theme.colors.thirdBg};
  }
`;

export const S = {
  Sidebar,
  SidebarItem,
  SidebarLink,
};
