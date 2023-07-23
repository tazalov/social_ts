import React from "react";
import styled from "styled-components";
import { PostForm } from "./postForm/PostForm";
import { Post } from "./post/Post";

type PostsPT = {};

export function Posts(props: PostsPT) {
  return (
    <StyledPosts>
      <PostForm />
      <Post message={"it' my first post"} />
      <Post message={"i can learn"} />
    </StyledPosts>
  );
}

const StyledPosts = styled.div``;
