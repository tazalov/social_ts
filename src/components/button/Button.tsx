import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonPT = {
  title: string;
  callback: () => void;
  submit?: boolean;
  radius?: boolean;
  disable?: boolean;
};

export function Button({ title, radius, disable, callback, submit }: ButtonPT) {
  const onClickHandler = () => {
    callback();
  };
  return (
    <StyledButton
      disabled={disable || false}
      onClick={onClickHandler}
      radius={radius ? "true" : "false"}
      type={submit ? "submit" : undefined}
    >
      {title}
    </StyledButton>
  );
}

type PropsType = {
  radius: string;
};

export const StyledButton = styled.button<PropsType>`
  padding: 10px 13px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.primaryFont};
  transition: all 0.3s ease;
  box-shadow: none;
  text-transform: uppercase;
  border-radius: ${(props) => (props.radius === "true" ? "50%" : "0")};
  display: block;
  &:hover {
    background-color: ${theme.colors.primaryFont};
    box-shadow: 0 0 8px rgba(0, 183, 255, 0.4);
    color: ${theme.colors.accent};
  }
  &:disabled {
    background-color: ${theme.colors.secondaryFont};
    color: ${theme.colors.primaryFont};
    box-shadow: none;
  }
`;
