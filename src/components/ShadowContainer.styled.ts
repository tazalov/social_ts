import styled from "styled-components";
import { theme } from "../styles/Theme";

type ShadowContainerPT = {};

export const ShadowContainerStyled = styled.div<ShadowContainerPT>`
  box-shadow: 0 0 15px 2px rgba(22, 24, 40, 0.8);
  background-color: ${theme.colors.secondaryBg};
`;
