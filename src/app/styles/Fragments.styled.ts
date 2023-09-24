import { css } from 'styled-components'

const Scroll = css`
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.thirdBg};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primaryBg};
  }
`

const ScrollBody = css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.secondaryBg};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.thirdBg};
  }
`

const Title = css`
  font-size: 30px;
  font-weight: 600;
  user-select: none;
`

const Subtitle = css`
  font-size: 18px;
  font-weight: 600;
  user-select: none;
`

export const F = {
  Scroll,
  ScrollBody,
  Title,
  Subtitle,
}
