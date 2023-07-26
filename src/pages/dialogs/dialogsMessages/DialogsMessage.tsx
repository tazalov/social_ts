import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type DialogsMessagePT = {};

export function DialogsMessage(props: DialogsMessagePT) {
  return (
    <StyledMessage>
      <Text>123123</Text>
      <Time>12/04/1996</Time>
    </StyledMessage>
  );
}

const StyledMessage = styled.li`
  margin: 5px;
  background-color: ${theme.colors.primaryBg};
  border-radius: 8px 8px 8px 0;
  max-width: 300px;
  position: relative;
  padding: 10px;
  user-select: none;
  &:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: -10px;
    width: 16px;
    height: 10px;
    clip-path: path("M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z");
    background-color: ${theme.colors.primaryBg};
  }
`;

const Text = styled.div`
  color: ${theme.colors.primaryFont};
  padding: 5px;
  font-size: 14px;
`;

const Time = styled.div`
  text-align: right;
  font-size: 10px;
  color: ${theme.colors.secondaryFont};
`;
