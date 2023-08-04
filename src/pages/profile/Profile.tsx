import React from "react";
import cover from "../../assets/images/carrepair.webp";
import styled from "styled-components";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { FlexWrapperStyled } from "../../components/FlexWrapper.styled";
import { Friends } from "./friends/Friends";
import { FriendsT, PostT, ProfileT } from "../../redux/profile.reducer";
import { Posts } from "./posts/Posts";
import { Preloader } from "../../components/preloader/Preloader";
import { About } from "./about/About";

type ProfilePT = {
  profile: ProfileT | null;
  posts: PostT[];
  friends: FriendsT;
  addPost: (postText: string) => void;
};

export function Profile({ posts, friends, addPost, profile }: ProfilePT) {
  return !profile ? (
    <Preloader size={150} />
  ) : (
    <FlexWrapperStyled gap={"20px"} direction={"column"}>
      <ShadowContainerStyled>
        <CoverImg>
          <img src={profile.photos.large || cover} alt="" />
        </CoverImg>
        <ProfileInfo
          avatar={profile.photos.small}
          name={profile.fullName}
          isLookingJob={profile.lookingForAJob}
          jobDesc={profile.lookingForAJobDescription}
          contacts={profile.contacts}
        />
      </ShadowContainerStyled>
      <ShadowContainerStyled></ShadowContainerStyled>
      <FlexWrapperStyled gap={"20px"}>
        <Posts posts={posts} addPost={addPost} />
        <FlexWrapperStyled gap={"20px"} direction={"column"}>
          <About about={profile.aboutMe} />
          <Friends friends={friends} />
        </FlexWrapperStyled>
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
