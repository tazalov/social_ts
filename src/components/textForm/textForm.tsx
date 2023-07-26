import React from "react";
import { FlexWrapper } from "../FlexWrapper";

type TextFormPT = {};

export function TextForm(props: TextFormPT) {
  return (
    <FlexWrapper>
      <textarea />
      <button>send</button>
    </FlexWrapper>
  );
}
