import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/anynft.webp";
import { FlexWrapperStyled } from "../../../components/FlexWrapper.styled";
import { NavLink } from "react-router-dom";
import { SubtitleStyled } from "../../../components/Subtitle.styled";

type DialogsListItemPT = {
  id: number;
  name: string;
};

export function DialogsListItem({ id, name }: DialogsListItemPT) {
  return (
    <ItemLink to={`/dialogs/${id}`}>
      <FlexWrapperStyled align={"center"} gap={"10px"}>
        <Avatar img={avatar} w={40} h={40} />
        <ItemText>{name}</ItemText>
      </FlexWrapperStyled>
    </ItemLink>
  );
}

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
  ${SubtitleStyled}
`;
