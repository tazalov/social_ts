import { ReactNode } from "react";
import { S } from "./Main.styled";

type MainPT = {
  children: ReactNode;
};

export function Main({ children }: MainPT) {
  return <S.Main>{children}</S.Main>;
}
