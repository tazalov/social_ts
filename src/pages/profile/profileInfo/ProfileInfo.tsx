import React from "react";
import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/anynft.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

type ProfileInfoPT = {};

export function ProfileInfo(props: ProfileInfoPT) {
  return (
    <StyledProfileInfo align={"center"}>
      <Avatar img={avatar} w={80} h={80} />
      <Info>username</Info>
    </StyledProfileInfo>
  );
}

const StyledProfileInfo = styled(FlexWrapper)`
  padding: 10px;
`;

const Info = styled.div`
  margin-left: 20px;
`;
