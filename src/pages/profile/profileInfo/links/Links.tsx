import React from "react";
import { Social } from "../../../../components/icon/Social";
import { FlexWrapperStyled } from "../../../../components/FlexWrapper.styled";
import styled from "styled-components";
import { ContactsT } from "../../../../redux/profile.reducer";

type LinksPT = {
  links: ContactsT;
};

export type ContactLinksT = keyof ContactsT;

export function Links({ links }: LinksPT) {
  const linksNames = Object.keys(links) as ContactLinksT[];
  return (
    <StyledLinks gap={"10px"} justify={"flex-end"}>
      {linksNames.reduce((acc, el) => {
        if (links[el]) {
          acc.push(<Social key={el} iconId={el} link={links[el] ?? ""} />);
        }
        return acc;
      }, [] as JSX.Element[])}
    </StyledLinks>
  );
}

const StyledLinks = styled(FlexWrapperStyled)``;
