import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonBPT = {
  title: string | React.ReactNode;
  disable?: boolean;
  callback: () => void;
};

export function ButtonB({ title, disable, callback }: ButtonBPT) {
  const onClickHandler = () => {
    callback();
  };
  return (
    <StyledButton disabled={disable || false} onClick={onClickHandler}>
      {disable ? "..." : title}
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  padding: 5px;
  color: ${theme.colors.secondaryFont};
  border: 1px solid ${theme.colors.secondaryFont};
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-align: center;
  border-radius: 5px;
  display: block;
  font-size: 14px;
  &:hover {
    background-color: ${theme.colors.secondaryFont};
    border: 1px solid ${theme.colors.primaryFont};
    color: ${theme.colors.primaryFont};
  }
`;
