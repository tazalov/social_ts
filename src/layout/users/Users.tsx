import React from "react";
import { ShadowContainer } from "../../components/ShadowContainer";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonB } from "../../components/button/ButtonB";
import { SideUserT } from "../../redux/_store";
import { User } from "./User";

type CoursesPT = {
  sideUsers: SideUserT[];
};

export function Users({ sideUsers }: CoursesPT) {
  return (
    <StyledUsers>
      <ShadowContainer>
        <TitleWrapper justify={"space-between"} align={"center"}>
          <Title>Who to follow</Title>
          <ButtonB
            title={<FontAwesomeIcon icon={faAnglesRight} />}
            callback={() => {}}
          />
        </TitleWrapper>
        <UserList>
          {sideUsers.map((el) => (
            <User key={el.id} name={el.name} followed={el.followed} />
          ))}
        </UserList>
      </ShadowContainer>
    </StyledUsers>
  );
}

const StyledUsers = styled.div``;

const TitleWrapper = styled(FlexWrapper)`
  background-color: ${theme.colors.thirdBg};
  padding: 15px 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const UserList = styled.ul``;
