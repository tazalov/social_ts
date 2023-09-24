import { FC } from 'react'
import styled, { RuleSet } from 'styled-components'

type AvatarPT = {
  img: string
  w: number
  h: number
  pos_styles?: RuleSet<Object>
}

export const Avatar: FC<AvatarPT> = ({ img, w, h, pos_styles }) => (
  <StyledAvatar $w={w} $h={h} $styles={pos_styles}>
    <img src={img} alt="img" />
  </StyledAvatar>
)

type StyledAvatarPT = {
  $w: number
  $h: number
  $styles?: RuleSet<Object>
}

const StyledAvatar = styled.div<StyledAvatarPT>`
  ${props => props.$styles};
  img {
    border-radius: 50%;
    width: ${props => props.$w + 'px'};
    height: ${props => props.$h + 'px'};
    object-fit: cover;
  }
`
