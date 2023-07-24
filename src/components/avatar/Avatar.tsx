import React from "react";
import styled from "styled-components";

type AvatarPT = {
  img: string;
  w: number;
  h: number;
};

export function Avatar(props: AvatarPT) {
  return (
    <StyledAvatar width={props.w} height={props.h}>
      <img src={props.img} alt="img" />
    </StyledAvatar>
  );
}

type StyledAvatarPT = {
  width: number;
  height: number;
};

const StyledAvatar = styled.div<StyledAvatarPT>`
  img {
    border-radius: 50%;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.height + "px"};
    object-fit: cover;
  }
`;
