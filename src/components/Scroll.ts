import { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Scroll = css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.thirdBg};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primaryBg};
  }
`;
