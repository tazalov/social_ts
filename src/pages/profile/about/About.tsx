import { TitleBlock } from "../../../components/titleBlock/TitleBlock";
import { C } from "../../../components/Common.styled";
import { S } from "./About.styled";

type AboutPT = {
  about: string | null;
};

export function About({ about }: AboutPT) {
  return (
    <C.ShadowContainer>
      <TitleBlock title={"About me"} nobtn />
      <S.Text>{about || "User dont add this info"}</S.Text>
    </C.ShadowContainer>
  );
}
