import styled, { css } from "styled-components";

type FlexWrapperPT = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  content?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPT>`
  min-height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-content: ${(props) => props.content || "stretch"};
  gap: ${(props) => props.gap || "0px"};
`;
