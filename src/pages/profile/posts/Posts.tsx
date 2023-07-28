import React from "react";
import styled from "styled-components";
import { Post } from "./post/Post";
import { TextForm } from "../../../components/textForm/textForm";
import { ShadowContainer } from "../../../components/ShadowContainer";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { PostT } from "../../../redux/_store";

type PostsPT = {
  posts: PostT[];
};

export function Posts({ posts }: PostsPT) {
  return (
    <StyledPosts direction={"column"} gap={"10px"}>
      <ShadowContainer as={FormWrapper}>
        <TextForm place={"Enter post message..."} />
      </ShadowContainer>
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

const StyledPosts = styled(FlexWrapper)``;

const FormWrapper = styled.div`
  padding: 10px;
`;
