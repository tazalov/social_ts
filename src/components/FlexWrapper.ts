import styled, { css } from "styled-components";

type FlexWrapperPT = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  relative?: boolean;
  content?: string;
  gap?: string;
  fullWidth?: boolean;
};

export const FlexWrapper = styled.div<FlexWrapperPT>`
  min-height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-content: ${(props) => props.content || "stretch"};
  gap: ${(props) => props.gap || "0px"}
    ${(props) =>
      props.relative &&
      css`
        position: relative;
      `};
  ${(props) =>
    props.fullWidth
      ? css`
          width: 100%;
        `
      : ""};
`;
