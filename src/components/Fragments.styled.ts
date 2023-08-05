import { css } from "styled-components";
import { theme } from "../styles/Theme";

const ScrollStyled = css`
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

const ScrollBodyStyled = css`
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

const SubtitleStyled = css`
  font-size: 18px;
  font-weight: 600;
  user-select: none;
`;

export const F = {
  ScrollStyled,
  ScrollBodyStyled,
  SubtitleStyled,
};
