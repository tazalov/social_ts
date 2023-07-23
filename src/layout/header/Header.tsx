import React from "react";
import { ShadowContainer } from "../../components/ShadowContainer";
import { Icon } from "../../components/Icon/Icon";
import { Container } from "../../components/Container";
import styled from "styled-components";

type HeaderPT = {};

export function Header(props: HeaderPT) {
  return (
    <ShadowContainer as={StyledHeader}>
      <Container>
        <Icon iconId={"logo"} />
      </Container>
    </ShadowContainer>
  );
}

const StyledHeader = styled.header`
  margin-bottom: 10px;
`;
