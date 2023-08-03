import { Icon } from "../icon/Icon";
import React from "react";
import styled from "styled-components";
import { FlexWrapperStyled } from "../FlexWrapper.styled";

type PreloaderPT = {
  size: number;
};

export function Preloader({ size }: PreloaderPT) {
  return (
    <StyledPreloader align={"center"} justify={"center"}>
      <Icon iconId={"logo"} width={`${size}px`} height={`${size}px`} />
    </StyledPreloader>
  );
}

const StyledPreloader = styled(FlexWrapperStyled)`
  height: 100%;
  animation: rotate 1s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
