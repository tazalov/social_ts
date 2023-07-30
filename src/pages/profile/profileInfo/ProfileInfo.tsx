import React from "react";
import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/anynft.webp";
import styled from "styled-components";
import { FlexWrapperStyled } from "../../../components/FlexWrapper.styled";
import { Links } from "./links/Links";
import { ButtonB } from "../../../components/button/ButtonB";
import { theme } from "../../../styles/Theme";

type ProfileInfoPT = {};

export function ProfileInfo(props: ProfileInfoPT) {
  return (
    <FlexWrapperStyled align={"center"} justify={"space-between"}>
      <StyledProfileInfo align={"center"}>
        <StyledAvatar>
          <Avatar img={avatar} w={150} h={150} />
        </StyledAvatar>
        <Info direction={"column"} align={"flex-start"} gap={"10px"}>
          <Name align={"center"} gap={"5px"}>
            <p>username</p>
            <span>Frontend developer</span>
          </Name>
          <Status>
            <i>A molestiae praesentium quod!</i>
          </Status>
          <Looking>
            Looking for a job: <span>yes</span>
          </Looking>
        </Info>
      </StyledProfileInfo>
      <Buttons
        direction={"column"}
        justify={"center"}
        align={"flex-end"}
        gap={"10px"}
      >
        <ButtonB title={"edit"} callback={() => console.log(1)} />
        <Links />
      </Buttons>
    </FlexWrapperStyled>
  );
}

const StyledProfileInfo = styled(FlexWrapperStyled)`
  padding: 10px 10px 10px 160px;
  position: relative;
`;

const StyledAvatar = styled.div`
  position: absolute;
  margin-top: -80px;
  left: 10px;
  top: 0;
  border: 5px solid ${theme.colors.secondaryBg};
  border-radius: 50%;
`;

const Info = styled(FlexWrapperStyled)`
  margin-left: 20px;
`;

const Name = styled(FlexWrapperStyled)`
  font-size: 25px;
  p {
    text-transform: uppercase;
  }
  span {
    font-size: 14px;
    padding: 5px;
    background-color: ${theme.colors.primaryBg};
  }
`;

const Status = styled.div``;

const Looking = styled.div`
  span {
    font-size: 18px;
    padding: 5px;
    text-transform: uppercase;
  }
`;

const Buttons = styled(FlexWrapperStyled)`
  padding: 0 10px;
`;
