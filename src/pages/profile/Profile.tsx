import React from "react";
import cover from "../../assets/images/carrepair.webp";
import styled from "styled-components";
import { ShadowContainer } from "../../components/ShadowContainer";
import { Posts } from "./posts/Posts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { PostT } from "../../redux/_store";

type ProfilePT = {
  posts: PostT[];
};

export function Profile({ posts }: ProfilePT) {
  return (
    <FlexWrapper gap={"10px"} direction={"column"}>
      <ShadowContainer>
        <CoverImg>
          <img src={cover} alt="" />
        </CoverImg>
        <ProfileInfo />
      </ShadowContainer>
      <Posts posts={posts} />
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
