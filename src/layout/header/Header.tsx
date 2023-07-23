import React from "react";
import { ShadowContainer } from "../../components/ShadowContainer";
import { Icon } from "../../components/Icon/Icon";
import { Container } from "../../components/Container";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

type HeaderPT = {};

export function Header(props: HeaderPT) {
  return (
    <ShadowContainer as={StyledHeader}>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Icon iconId={"logo"} width={"30px"} height={"30px"} />
          <FlexWrapper gap={"10px"}>
            <MenuLink href="#1">
              <Icon iconId={"search"} width={"20px"} height={"20px"} />
            </MenuLink>
            <MenuLink href="#1">
              <Icon iconId={"gear"} width={"20px"} height={"20px"} />
            </MenuLink>
            <MenuLink href="#1">
              <Icon
                iconId={"logout"}
                width={"20px"}
                height={"20px"}
                viewBox="0 0 32 32"
              />
            </MenuLink>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </ShadowContainer>
  );
}

const StyledHeader = styled.header`
  margin-bottom: 10px;
  padding: 5px;
`;

const MenuLink = styled.a`
  svg {
    transition: all 0.3s linear;
    &:hover {
      fill: ${theme.colors.accent};
    }
  }
`;
