import React from "react";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import { Icon } from "../../components/icon/Icon";
import { ContainerStyled } from "../../components/Container.styled";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapperStyled } from "../../components/FlexWrapper.styled";

type HeaderPT = {};

export function Header(props: HeaderPT) {
  return (
    <ContainerStyled>
      <ShadowContainerStyled as={StyledHeader}>
        <FlexWrapperStyled justify={"space-between"} align={"center"}>
          <Icon iconId={"logo"} width={"30px"} height={"30px"} />
          <FlexWrapperStyled gap={"20px"}>
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
          </FlexWrapperStyled>
        </FlexWrapperStyled>
      </ShadowContainerStyled>
    </ContainerStyled>
  );
}

const StyledHeader = styled.header`
  margin: 20px 0;
  padding: 10px;
`;

const MenuLink = styled.a`
  svg {
    transition: all 0.3s linear;
    &:hover {
      fill: ${theme.colors.accent};
    }
  }
`;
