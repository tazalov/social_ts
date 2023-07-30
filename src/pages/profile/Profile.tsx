import React from "react";
import cover from "../../assets/images/carrepair.webp";
import styled from "styled-components";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { FlexWrapperStyled } from "../../components/FlexWrapper.styled";
import { Friends } from "./friends/Friends";
import { FriendsT, PostT } from "../../redux/profile.reducer";
import { Posts } from "./posts/Posts";

type ProfilePT = {
  posts: PostT[];
  friends: FriendsT;
  addPost: (postText: string) => void;
};

export function Profile({ posts, friends, addPost }: ProfilePT) {
  return (
    <FlexWrapperStyled gap={"20px"} direction={"column"}>
      <ShadowContainerStyled>
        <CoverImg>
          <img src={cover} alt="" />
        </CoverImg>
        <ProfileInfo />
      </ShadowContainerStyled>
      <FlexWrapperStyled gap={"20px"}>
        <Posts posts={posts} addPost={addPost} />
        <Friends friends={friends} />
      </FlexWrapperStyled>
    </FlexWrapperStyled>
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
