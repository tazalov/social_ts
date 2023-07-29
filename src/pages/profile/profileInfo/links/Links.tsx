import React from "react";
import { Social } from "../../../../components/icon/Social";
import { FlexWrapperStyled } from "../../../../components/FlexWrapper.styled";
import styled from "styled-components";

type LinksPT = {};

export function Links(props: LinksPT) {
  return (
    <StyledLinks gap={"10px"} justify={"flex-end"}>
      <Social iconId={"github"} />
      <Social iconId={"vk"} />
      <Social iconId={"facebook"} />
      <Social iconId={"instagram"} />
      <Social iconId={"twitter"} />
      <Social iconId={"website"} />
      <Social iconId={"youtube"} />
      <Social iconId={"mainLink"} />
    </StyledLinks>
  );
}

const StyledLinks = styled(FlexWrapperStyled)``;
