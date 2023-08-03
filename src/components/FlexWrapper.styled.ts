import styled from "styled-components";

type FlexWrapperPT = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  content?: string;
  gap?: string;
};

export const FlexWrapperStyled = styled.div<FlexWrapperPT>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-content: ${(props) => props.content || "stretch"};
  gap: ${(props) => props.gap || "0px"};
`;
