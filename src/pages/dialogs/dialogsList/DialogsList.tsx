import React from "react";
import styled from "styled-components";
import { DialogsListItem } from "./DialogsListItem";
import { Scroll } from "../../../components/Scroll";
import { ShadowContainer } from "../../../components/ShadowContainer";

type DialogsListPT = {};

export function DialogsList(props: DialogsListPT) {
  const data = [
    { id: 1, name: "Iliya" },
    { id: 2, name: "Dmitry" },
    { id: 3, name: "Victor" },
    { id: 4, name: "Dariya" },
    { id: 5, name: "Alena" },
    { id: 6, name: "Vladimir" },
    { id: 7, name: "Tazazal" },
    { id: 8, name: "Iron Man" },
    { id: 9, name: "Blablabla" },
    { id: 10, name: "Zxcxzczxc" },
  ];

  return (
    <StyledDialogsList>
      <List>
        {data.map((el) => (
          <DialogsListItem key={el.id} id={el.id} name={el.name} />
        ))}
      </List>
    </StyledDialogsList>
  );
}

const StyledDialogsList = styled(ShadowContainer)`
  padding: 5px;
`;

const List = styled.ul`
  height: 100%;
  overflow-y: hidden;
  ${Scroll}
  &:hover,
  &:focus {
    overflow-y: auto;
  }
`;
