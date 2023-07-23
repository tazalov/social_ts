import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Avatar } from "../../../../components/avatar/Avatar";
import avatar from "../../../../assets/images/anynft.webp";
import styled from "styled-components";
import { ShadowContainer } from "../../../../components/ShadowContainer";
import { theme } from "../../../../styles/Theme";

type PostPT = {};

export function Post(props: PostPT) {
  return (
    <ShadowContainer>
      <StyledPost>
        <FlexWrapper align={"center"}>
          <Avatar img={avatar} w={50} h={50} />
          <UserInfo>
            <span>username</span>
            <span>date</span>
          </UserInfo>
        </FlexWrapper>
        <PostText>blablabla</PostText>
        <PostButtons gap={"10px"}>
          <button>like</button>
          <button>comment</button>
          <button>delete</button>
        </PostButtons>
      </StyledPost>
    </ShadowContainer>
  );
}

const StyledPost = styled.div`
  margin-bottom: 10px;
  padding: 10px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

const PostText = styled.div`
  margin: 5px 0;
`;

const PostButtons = styled(FlexWrapper)`
  button {
    padding: 5px;
    background-color: ${theme.colors.primaryBg};
  }
`;
