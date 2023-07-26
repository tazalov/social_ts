import React from "react";
import styled from "styled-components";
import { Post } from "./post/Post";
import { TextForm } from "../../../components/textForm/textForm";

type PostsPT = {};

export function Posts(props: PostsPT) {
  return (
    <StyledPosts>
      <TextForm />
      <Post message={"it' my first post"} />
      <Post message={"i can learn"} />
    </StyledPosts>
  );
}

const StyledPosts = styled.div``;
