import styled from "styled-components";
import { theme } from "../styles/Theme";

const Container = styled.div`
  max-width: 1270px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

type FlexWrapperPT = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  content?: string;
  gap?: string;
};

const FlexWrapper = styled.div<FlexWrapperPT>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-content: ${(props) => props.content || "stretch"};
  gap: ${(props) => props.gap || "0px"};
`;

const ShadowContainer = styled.div`
  box-shadow: 0 0 15px 2px rgba(22, 24, 40, 0.8);
  background-color: ${theme.colors.secondaryBg};
`;

export const C = {
  Container,
  FlexWrapper,
  ShadowContainer,
};
