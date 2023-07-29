import React from "react";
import cover from "../../assets/images/carrepair.webp";
import styled from "styled-components";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import { Posts } from "./posts/Posts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { FlexWrapperStyled } from "../../components/FlexWrapper.styled";
import { ActionsT, ProfileT } from "../../redux/_store";
import { Friends } from "./friends/Friends";

type ProfilePT = {
  profile: ProfileT;
  dispatch: (value: ActionsT) => void;
};

export function Profile({ profile, dispatch }: ProfilePT) {
  return (
    <FlexWrapperStyled gap={"20px"} direction={"column"}>
      <ShadowContainerStyled>
        <CoverImg>
          <img src={cover} alt="" />
        </CoverImg>
        <ProfileInfo />
      </ShadowContainerStyled>
      <FlexWrapperStyled gap={"20px"}>
        <Posts posts={profile.posts} dispatch={dispatch} />
        <Friends friends={profile.friends} />
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
