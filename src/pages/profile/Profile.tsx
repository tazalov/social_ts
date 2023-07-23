import React from "react";
import cover from "../../assets/images/carrepair.webp";
import styled from "styled-components";
import { ShadowContainer } from "../../components/ShadowContainer";
import { Avatar } from "../../components/avatar/Avatar";
import avatar from "../../assets/images/anynft.webp";
import { Posts } from "./posts/Posts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

type ProfilePT = {};

export function Profile(props: ProfilePT) {
  return (
    <>
      <ShadowContainer>
        <CoverImg>
          <img src={cover} alt="" />
        </CoverImg>
        <ProfileInfo />
      </ShadowContainer>
      <Posts />
    </>
  );
}

const CoverImg = styled.div`
  height: 150px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
