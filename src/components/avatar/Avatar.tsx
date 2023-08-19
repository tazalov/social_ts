import { FC } from 'react'
import styled from 'styled-components'

type AvatarPT = {
  img: string
  w: number
  h: number
}

export const Avatar: FC<AvatarPT> = ({ img, w, h }) => (
  <StyledAvatar width={w} height={h}>
    <img src={img} alt="img" />
  </StyledAvatar>
)

type StyledAvatarPT = {
  width: number
  height: number
}

const StyledAvatar = styled.div<StyledAvatarPT>`
  img {
    border-radius: 50%;
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    object-fit: cover;
  }
`
