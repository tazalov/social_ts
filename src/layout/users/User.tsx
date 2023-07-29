import { Avatar } from "../../components/avatar/Avatar";
import avatar from "../../assets/images/carrepair.webp";
import { ButtonB } from "../../components/button/ButtonB";
import React from "react";
import styled from "styled-components";
import { FlexWrapperStyled } from "../../components/FlexWrapper.styled";
import { theme } from "../../styles/Theme";

type UserPT = {
  name: string;
  followed: boolean;
};

export function User({ name, followed }: UserPT) {
  return (
    <StyledUser align={"center"} gap={"5px"} justify={"space-between"}>
      <Info align={"center"} gap={"10px"}>
        <Avatar img={avatar} w={50} h={50} />
        <span>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</span>
      </Info>
      <ButtonB title={"follow"} callback={() => {}} disable={followed} />
    </StyledUser>
  );
}

const StyledUser = styled(FlexWrapperStyled)`
  padding: 10px;
  &:hover {
    background-color: ${theme.colors.thirdBg};
  }
`;

const Info = styled(FlexWrapperStyled)`
  user-select: none;
`;
