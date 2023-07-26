import React from "react";
import styled from "styled-components";
import { ShadowContainer } from "../ShadowContainer";
import { FlexWrapper } from "../FlexWrapper";

type TextFormPT = {};

export function TextForm(props: TextFormPT) {
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
