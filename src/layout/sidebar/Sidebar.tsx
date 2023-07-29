import React from "react";
import { ShadowContainer } from "../../components/ShadowContainer";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMessage,
  faMusic,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { SubTitle } from "../../components/Subtitle";

type SidebarPT = {};

export function Sidebar(props: SidebarPT) {
  return (
    <StyledSidebar>
      <ShadowContainer as={"ul"}>
        <SidebarItem>
          <SidebarLink to={"/profile"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to={"/dialogs"}>
            <FontAwesomeIcon icon={faMessage} />
            <span>Dialogs</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to={"/music"}>
            <FontAwesomeIcon icon={faMusic} />
            <span>Music</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to={"/1"}>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Friends</span>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to={"/2"}>
            <FontAwesomeIcon icon={faComments} />
            <span>Chat</span>
          </SidebarLink>
        </SidebarItem>
      </ShadowContainer>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav``;

const SidebarItem = styled.li``;

const SidebarLink = styled(NavLink)`
  ${SubTitle};
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
    background-color: ${theme.colors.thirdBg};
  }
`;
