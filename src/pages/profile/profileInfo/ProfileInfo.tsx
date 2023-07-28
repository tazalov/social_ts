import React from "react";
import { Avatar } from "../../../components/avatar/Avatar";
import avatar from "../../../assets/images/anynft.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Links } from "./links/Links";
import { ButtonB } from "../../../components/button/ButtonB";
import { theme } from "../../../styles/Theme";

type ProfileInfoPT = {};

export function ProfileInfo(props: ProfileInfoPT) {
  return (
    <FlexWrapper align={"center"} justify={"space-between"}>
      <StyledProfileInfo align={"center"}>
        <Avatar img={avatar} w={100} h={100} />
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
    </FlexWrapper>
  );
}

const StyledProfileInfo = styled(FlexWrapper)`
  padding: 10px;
`;

const Info = styled(FlexWrapper)`
  margin-left: 20px;
`;

const Name = styled(FlexWrapper)`
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

const Buttons = styled(FlexWrapper)`
  padding: 0 10px;
`;
