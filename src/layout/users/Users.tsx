import React from "react";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import styled from "styled-components";
import { User } from "./User";
import { TitleBlock } from "../../components/titleBlock/TitleBlock";
import { SideUserT } from "../../redux/sideusers.reducer";

type CoursesPT = {
  sideUsers: SideUserT[];
};

export function Users({ sideUsers }: CoursesPT) {
  return (
    <StyledUsers>
      <ShadowContainerStyled>
        <TitleBlock title={"Who to follow"} />
        <UserList>
          {sideUsers.map((el) => (
            <User key={el.id} name={el.name} followed={el.followed} />
          ))}
        </UserList>
      </ShadowContainerStyled>
    </StyledUsers>
  );
}

const StyledUsers = styled.div``;

const UserList = styled.ul``;
