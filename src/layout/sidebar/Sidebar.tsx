import React from "react";
import { ShadowContainer } from "../../components/ShadowContainer";
import styled from "styled-components";

type SidebarPT = {};

export function Sidebar(props: SidebarPT) {
  return (
    <StyledSidebar>
      <ShadowContainer as={"ul"}>
        <SidebarItem>Profile</SidebarItem>
        <SidebarItem>Messages</SidebarItem>
        <SidebarItem>Friends</SidebarItem>
        <SidebarItem>Chat</SidebarItem>
      </ShadowContainer>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav`
  grid-area: sidebar;
`;

const SidebarItem = styled.li``;
