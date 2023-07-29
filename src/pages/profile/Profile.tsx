import React from "react";
import cover from "../../assets/images/carrepair.webp";
import styled from "styled-components";
import { ShadowContainer } from "../../components/ShadowContainer";
import { Posts } from "./posts/Posts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ProfileT } from "../../redux/_store";
import { Friends } from "./friends/Friends";

type ProfilePT = {
  profile: ProfileT;
};

export function Profile({ profile }: ProfilePT) {
  return (
    <FlexWrapper gap={"20px"} direction={"column"}>
      <ShadowContainer>
        <CoverImg>
          <img src={cover} alt="" />
        </CoverImg>
        <ProfileInfo />
      </ShadowContainer>
      <FlexWrapper gap={"20px"}>
        <Posts posts={profile.posts} />
        <Friends friends={profile.friends} />
      </FlexWrapper>
    </FlexWrapper>
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
