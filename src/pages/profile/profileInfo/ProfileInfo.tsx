import React from "react";
import { Avatar } from "../../../components/avatar/Avatar";
import noAvatar from "../../../assets/images/anynft.webp";
import styled from "styled-components";
import { FlexWrapperStyled } from "../../../components/FlexWrapper.styled";
import { Links } from "./links/Links";
import { ButtonB } from "../../../components/button/ButtonB";
import { theme } from "../../../styles/Theme";
import { ContactsT } from "../../../redux/profile.reducer";

type ProfileInfoPT = {
  avatar: string | null;
  name: string;
  isLookingJob: boolean;
  jobDesc: string | null;
  contacts: ContactsT;
};

export function ProfileInfo({
  avatar,
  name,
  isLookingJob,
  jobDesc,
  contacts,
}: ProfileInfoPT) {
  return (
    <FlexWrapperStyled align={"center"} justify={"space-between"}>
      <StyledProfileInfo align={"center"}>
        <StyledAvatar>
          <Avatar img={avatar || noAvatar} w={150} h={150} />
        </StyledAvatar>
        <Info direction={"column"} align={"flex-start"} gap={"10px"}>
          <Name align={"center"} gap={"5px"}>
            <p>{name}</p>
            <span>{jobDesc || "developer"}</span>
          </Name>
          <Status>
            <i>A molestiae praesentium quod!</i>
          </Status>
          <Looking>
            Looking for a job: <span>{isLookingJob ? "YES" : "NO"}</span>
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
        <Links links={contacts} />
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

const Status = styled.div`
  color: ${theme.colors.secondaryFont};
`;

const Looking = styled.div`
  text-align: left;
  span {
    font-size: 18px;
    padding: 5px;
  }
`;

const Buttons = styled(FlexWrapperStyled)`
  padding: 0 10px;
`;
