import React from "react";
import styled from "styled-components";
import { Post } from "./post/Post";
import { TextForm } from "../../../components/textForm/textForm";
import { ShadowContainer } from "../../../components/ShadowContainer";

type PostsPT = {};

export function Posts(props: PostsPT) {
  const data = [
    { id: 1, user: "Tazalov", text: "it' my first post", likes: 12 },
    { id: 2, user: "Dariya", text: "it' my second post", likes: 22 },
    { id: 3, user: "Egorka", text: "it' my third post", likes: 12312 },
  ];
  return (
    <StyledPosts>
      <ShadowContainer as={FormWrapper}>
        <TextForm place={"Enter post message..."} />
      </ShadowContainer>
      {data.map((el) => (
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

const StyledPosts = styled.div``;

const FormWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
`;
