import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMessage,
  faMusic,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { S } from "./Sidebar.styled";
import { C } from "../../components/Common.styled";

export function Sidebar() {
  return (
    <S.Sidebar>
      <C.ShadowContainer as={"ul"}>
        <S.SidebarItem>
          <S.SidebarLink to={"/profile"}>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink to={"/dialogs"}>
            <FontAwesomeIcon icon={faMessage} />
            <span>Dialogs</span>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink to={"/music"}>
            <FontAwesomeIcon icon={faMusic} />
            <span>Music</span>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink to={"/1"}>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Friends</span>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink to={"/2"}>
            <FontAwesomeIcon icon={faComments} />
            <span>Chat</span>
          </S.SidebarLink>
        </S.SidebarItem>
      </C.ShadowContainer>
    </S.Sidebar>
  );
}
