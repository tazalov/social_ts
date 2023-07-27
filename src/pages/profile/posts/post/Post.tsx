import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Avatar } from "../../../../components/avatar/Avatar";
import avatar from "../../../../assets/images/anynft.webp";
import styled from "styled-components";
import { ShadowContainer } from "../../../../components/ShadowContainer";
import { theme } from "../../../../styles/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

type PostPT = {
  id: number;
  name: string;
  message: string;
  likes: number;
};

export function Post({ name, message, likes }: PostPT) {
  return (
    <ShadowContainer>
      <StyledPost>
        <FlexWrapper align={"center"}>
          <Avatar img={avatar} w={50} h={50} />
          <UserInfo>
            <span>{name}</span>
            <i>12/04/2022</i>
          </UserInfo>
        </FlexWrapper>
        <PostText>{message}</PostText>
        <PostButtons gap={"10px"} justify={"space-between"}>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likes}</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
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
  span {
    color: ${theme.colors.primaryFont};
    font-size: 20px;
    font-weight: 600;
  }
  i {
    color: ${theme.colors.secondaryFont};
    font-size: 10px;
  }
`;

const PostText = styled.div`
  margin: 10px 0;
  padding: 10px;
`;

const PostButtons = styled(FlexWrapper)`
  button {
    padding: 5px;
    color: ${theme.colors.secondaryFont};
    font-size: 14px;
    &:hover {
      color: ${theme.colors.primaryFont};
    }
    span {
      margin-left: 5px;
    }
  }
`;
