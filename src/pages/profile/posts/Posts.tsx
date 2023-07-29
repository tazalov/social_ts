import React from "react";
import styled from "styled-components";
import { Post } from "./post/Post";
import { TextForm } from "../../../components/textForm/textForm";
import { ShadowContainer } from "../../../components/ShadowContainer";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { PostT } from "../../../redux/_store";

type PostsPT = {
  posts: PostT[];
  addPost: (value: string) => void;
};

export function Posts({ posts, addPost }: PostsPT) {
  return (
    <FlexWrapper direction={"column"} gap={"20px"} fullWidth>
      <ShadowContainer as={FormWrapper}>
        <TextForm place={"Enter post message..."} callback={addPost} />
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
    </FlexWrapper>
  );
}

const FormWrapper = styled.div`
  padding: 10px;
`;
