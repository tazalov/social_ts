import { css } from "styled-components";
import { theme } from "../styles/Theme";

export const ScrollBody = css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.secondaryBg};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.thirdBg};
  }
`;
