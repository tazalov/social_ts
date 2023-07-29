import { css } from "styled-components";
import { theme } from "../styles/Theme";

export const ScrollStyled = css`
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.thirdBg};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primaryBg};
  }
`;
