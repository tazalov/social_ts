import React from "react";
import cover from "../../assets/images/carrepair.webp";
import styled from "styled-components";
import { ShadowContainer } from "../../components/ShadowContainer";

type ProfilePT = {};

export function Profile(props: ProfilePT) {
  return (
    <ShadowContainer>
      <CoverImg>
        <img src={cover} alt="" />
      </CoverImg>
      <div>ava+description</div>
      <div>
        My Posts
        <div>NewPost</div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
      </div>
    </ShadowContainer>
  );
}

const CoverImg = styled.div`
  height: 200px;
  object-fit: cover;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
