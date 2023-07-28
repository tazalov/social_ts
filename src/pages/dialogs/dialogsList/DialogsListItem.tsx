import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/anynft.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { NavLink } from "react-router-dom";

type DialogsListItemPT = {
  id: number;
  name: string;
};

export function DialogsListItem({ id, name }: DialogsListItemPT) {
  return (
    <ListItem>
      <ItemLink to={`/dialogs/${id}`}>
        <FlexWrapper align={"center"} gap={"10px"}>
          <Avatar img={avatar} w={40} h={40} />
          <ItemText>{name}</ItemText>
        </FlexWrapper>
      </ItemLink>
    </ListItem>
  );
}

const ListItem = styled.li``;

const ItemLink = styled(NavLink)`
  padding: 10px;
  user-select: none;
  cursor: pointer;
  display: block;
  &.active,
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const ItemText = styled.div`
  font-size: 22px;
`;
