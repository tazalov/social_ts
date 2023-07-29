import React from "react";
import styled from "styled-components";
import { Post } from "./post/Post";
import { TextForm } from "../../../components/textForm/textForm";
import { ShadowContainerStyled } from "../../../components/ShadowContainer.styled";
import { FlexWrapperStyled } from "../../../components/FlexWrapper.styled";
import { ActionsT, PostT } from "../../../redux/_store";
import { addPostAC } from "../../../redux/profile.reducer";

type PostsPT = {
  posts: PostT[];
  dispatch: (value: ActionsT) => void;
};

export function Posts({ posts, dispatch }: PostsPT) {
  const addPost = (postText: string) => {
    dispatch(addPostAC(postText));
  };

  return (
    <StyledPosts direction={"column"} gap={"20px"}>
      <ShadowContainerStyled as={FormWrapper}>
        <TextForm place={"Enter post message..."} callback={addPost} />
      </ShadowContainerStyled>
      {posts.map((el) => (
        <Post
          key={el.id}
          id={el.id}
          name={el.user}
          message={el.text}
          likes={el.likes}
        />
      ))}
    </StyledPosts>
  );
}

const StyledPosts = styled(FlexWrapperStyled)`
  width: 100%;
`;

const FormWrapper = styled.div`
  padding: 10px;
`;
