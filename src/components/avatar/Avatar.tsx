import React from "react";
import styled from "styled-components";

type AvatarPT = {
  img: string;
  width: number;
  height: number;
};

export function Avatar(props: AvatarPT) {
  return (
    <StyledAvatar width={props.width} height={props.height}>
      <img src={props.img} alt="img" />
    </StyledAvatar>
  );
}

type StyledAvatarPT = {
  width: number;
  height: number;
};

const StyledAvatar = styled.div<StyledAvatarPT>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
