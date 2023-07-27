import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";

type TextFormPT = {
  place: string;
};

export function TextForm({ place }: TextFormPT) {
  return (
    <FlexWrapper gap={"10px"}>
      <StyledTextArea placeholder={place} />
      <Button title={"send"} callback={() => console.log("btn")} />
    </FlexWrapper>
  );
}

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  color: ${theme.colors.primaryFont};
  background-color: ${theme.colors.thirdBg};
`;
