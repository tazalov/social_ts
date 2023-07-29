import React, { ChangeEvent, useState } from "react";
import { FlexWrapperStyled } from "../FlexWrapper.styled";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";

type TextFormPT = {
  place: string;
  callback: (value: string) => void;
  submit?: boolean;
};

export function TextForm({ place, callback, submit }: TextFormPT) {
  const [text, setText] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onClickHandler = () => {
    callback(text);
    setText("");
  };

  return (
    <FlexWrapperStyled gap={"10px"}>
      <StyledTextArea
        placeholder={place}
        value={text}
        onChange={onChangeHandler}
      />
      <Button title={"send"} callback={onClickHandler} submit />
    </FlexWrapperStyled>
  );
}

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  color: ${theme.colors.primaryFont};
  background-color: ${theme.colors.thirdBg};
  font-family:
    "Rubik",
    -apple-system,
    BlinkMacSystemFont,
    "Arial",
    sans-serif;
`;
