import React from "react";
import styled from "styled-components";
import { Post } from "./post/Post";
import { TextForm } from "../../../components/textForm/textForm";
import { ShadowContainer } from "../../../components/ShadowContainer";

type PostsPT = {};

export function Posts(props: PostsPT) {
  return (
    <StyledPosts>
      <ShadowContainer as={FormWrapper}>
        <TextForm place={"Enter post message..."} />
      </ShadowContainer>
      <Post message={"it' my first post"} />
      <Post message={"i can learn"} />
    </StyledPosts>
  );
}

const StyledPosts = styled.div``;

const FormWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
`;
