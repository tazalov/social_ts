import { TitleBlock } from "../../../components/titleBlock/TitleBlock";
import { ShadowContainerStyled } from "../../../components/ShadowContainer.styled";
import styled from "styled-components";

type AboutPT = {
  about: string | null;
};

export function About({ about }: AboutPT) {
  return (
    <ShadowContainerStyled>
      <TitleBlock title={"About me"} nobtn />
      <Text>{about || "User dont add this info"}</Text>
    </ShadowContainerStyled>
  );
}

const Text = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 20px;
`;
