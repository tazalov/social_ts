import React from "react";
import styled from "styled-components";
import { DialogsListItem } from "./DialogsListItem";
import { Scroll } from "../../../components/Scroll";
import { ShadowContainer } from "../../../components/ShadowContainer";
import { DialogsListItemT } from "../../../redux/_store";

type DialogsListPT = {
  list: DialogsListItemT[];
};

export function DialogsList({ list }: DialogsListPT) {
  return (
    <StyledDialogsList>
      <List>
        {list.map((el) => (
          <DialogsListItem key={el.id} id={el.id} name={el.name} />
        ))}
      </List>
    </StyledDialogsList>
  );
}

const StyledDialogsList = styled(ShadowContainer)`
  height: 100%;
`;

const List = styled.ul`
  ${Scroll};
  height: 100%;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
`;
