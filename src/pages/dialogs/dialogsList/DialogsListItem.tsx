import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/anynft.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

type DialogsListItemPT = {};

export function DialogsListItem(props: DialogsListItemPT) {
  return (
    <ListItem>
      <FlexWrapper align={"center"} gap={"10px"}>
        <Avatar img={avatar} w={40} h={40} />
        <ItemText>123123123</ItemText>
      </FlexWrapper>
    </ListItem>
  );
}

const ListItem = styled.li`
  padding: 10px;
  &:hover {
    background-color: ${theme.colors.primaryBg};
  }
`;

const ItemText = styled.div``;
