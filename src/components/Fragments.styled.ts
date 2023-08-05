import { css } from "styled-components";
import { theme } from "../styles/Theme";

const Scroll = css`
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

const ScrollBody = css`
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

const Subtitle = css`
  font-size: 18px;
  font-weight: 600;
  user-select: none;
`;

export const F = {
  Scroll,
  ScrollBody,
  Subtitle,
};
