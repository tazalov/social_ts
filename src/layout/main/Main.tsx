import React from "react";
import styled from "styled-components";

type MainPT = {
  children: React.ReactNode;
};

export function Main(props: MainPT) {
  return <StyledMain>{props.children}</StyledMain>;
}

const StyledMain = styled.main`
  width: 100%;
`;
