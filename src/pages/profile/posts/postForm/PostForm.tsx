import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import styled from "styled-components";
import { ShadowContainer } from "../../../../components/ShadowContainer";

type PostFormPT = {};

export function PostForm(props: PostFormPT) {
  return (
    <ShadowContainer>
      <StyledPostForm>
        <FlexWrapper>
          <textarea />
          <button>send</button>
        </FlexWrapper>
      </StyledPostForm>
    </ShadowContainer>
  );
}

const StyledPostForm = styled.div`
  margin: 10px 0;
  padding: 10px;
`;
