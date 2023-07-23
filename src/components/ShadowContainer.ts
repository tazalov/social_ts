import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

type ShadowContainerPT = {
  fullWidth?: boolean;
};

export const ShadowContainer = styled.div<ShadowContainerPT>`
  padding: 5px;
  box-shadow: 0 0 15px 2px rgba(22, 24, 40, 0.8);
  background-color: ${theme.colors.secondaryBg};
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
