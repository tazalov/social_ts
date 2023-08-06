import React from "react";
import styled from "styled-components";

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
      {title}
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  padding: 5px;
  color: ${(props) => props.theme.colors.secondaryFont};
  border: 1px solid ${(props) => props.theme.colors.secondaryFont};
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-align: center;
  border-radius: 5px;
  display: block;
  font-size: 14px;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryFont};
    border: 1px solid ${(props) => props.theme.colors.secondaryFont};
    color: ${(props) => props.theme.colors.thirdBg};
  }
`;
