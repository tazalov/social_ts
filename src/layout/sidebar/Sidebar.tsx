import React from "react";
import { ShadowContainer } from "../../components/ShadowContainer";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { NavLink } from "react-router-dom";

type SidebarPT = {};

export function Sidebar(props: SidebarPT) {
  return (
    <StyledSidebar>
      <ShadowContainer as={"ul"}>
        <SidebarItem>
          <SidebarLink to={"/profile"}>Profile</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to={"/dialogs"}>Dialogs</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to={"/1"}>Friends</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to={"/2"}>Chat</SidebarLink>
        </SidebarItem>
      </ShadowContainer>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav`
  grid-area: sidebar;
`;

const SidebarItem = styled.li``;

const SidebarLink = styled(NavLink)`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 20px;
  user-select: none;
  cursor: pointer;
  display: block;
  &.active,
  &:hover {
    background-color: ${theme.colors.primaryBg};
  }
`;
