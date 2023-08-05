import { Icon } from "../icon/Icon";
import React from "react";
import styled from "styled-components";
import { C } from "../Common.styled";

type PreloaderPT = {
  size: number;
};

export function Preloader({ size }: PreloaderPT) {
  return (
    <StyledPreloader align={"center"} justify={"center"}>
      <Wrapper>
        <Icon iconId={"logo"} width={`${size}px`} height={`${size}px`} />
      </Wrapper>
    </StyledPreloader>
  );
}

const StyledPreloader = styled(C.FlexWrapper)`
  height: 100%;
`;

const Wrapper = styled.div`
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
