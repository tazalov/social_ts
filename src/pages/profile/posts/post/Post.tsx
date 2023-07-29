import React from "react";
import { FlexWrapperStyled } from "../../../../components/FlexWrapper.styled";
import { Avatar } from "../../../../components/avatar/Avatar";
import avatar from "../../../../assets/images/anynft.webp";
import styled from "styled-components";
import { ShadowContainerStyled } from "../../../../components/ShadowContainer.styled";
import { theme } from "../../../../styles/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { SubtitleStyled } from "../../../../components/Subtitle.styled";

type PostPT = {
  id: number;
  name: string;
  message: string;
  likes: number;
};

export function Post({ name, message, likes }: PostPT) {
  return (
    <ShadowContainerStyled>
      <StyledPost>
        <FlexWrapperStyled align={"center"}>
          <Avatar img={avatar} w={50} h={50} />
          <UserInfo gap={"10px"} justify={"space-between"}>
            <span>{name}</span>
            <i>12/04/2022</i>
          </UserInfo>
        </FlexWrapperStyled>
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
    </ShadowContainerStyled>
  );
}

const StyledPost = styled.div`
  padding: 10px;
`;

const UserInfo = styled(FlexWrapperStyled)`
  width: 100%;
  margin-left: 10px;
  span {
    ${SubtitleStyled};
  }
  i {
    color: ${theme.colors.secondaryFont};
    font-size: 10px;
  }
`;

const PostText = styled.div`
  margin: 10px 0;
  padding: 20px 10px;
  background-color: ${theme.colors.thirdBg};
`;

const PostButtons = styled(FlexWrapperStyled)`
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
