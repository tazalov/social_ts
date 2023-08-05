import React from "react";
import { SideUser } from "./SideUser";
import { TitleBlock } from "../../components/titleBlock/TitleBlock";
import { SideUserT } from "../../redux/sideusers.reducer";
import { S } from "./SideUsers.styled";
import { C } from "../../components/Common.styled";

type CoursesPT = {
  sideUsers: SideUserT[];
};

export function SideUsers({ sideUsers }: CoursesPT) {
  return (
    <C.ShadowContainer>
      <TitleBlock title={"Who to follow"} />
      <S.UserList>
        {sideUsers.map((el) => (
          <SideUser key={el.id} name={el.name} followed={el.followed} />
        ))}
      </S.UserList>
    </C.ShadowContainer>
  );
}
